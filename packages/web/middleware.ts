import { createI18nMiddleware } from "next-international/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ja"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

/**
 * セキュリティヘッダーとその他のヘッダーを追加する
 */
const addHeaders = (
  request: NextRequest,
  response: NextResponse<unknown>,
): NextResponse<unknown> => {
  // セキュリティヘッダー
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );
  // Content-Security-Policy
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;",
  );
  // Strict-Transport-Security
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
  );

  // 追加の一般的なヘッダー
  const userAgent = request.headers.get("user-agent") || "Unknown";
  response.headers.set("X-User-Agent", userAgent);

  const acceptLanguage =
    request.headers.get("accept-language") || "en-US,en;q=0.9";
  response.headers.set("X-Accept-Language", acceptLanguage);

  response.headers.set("X-Request-Method", request.method);
  response.headers.set("X-Request-URL", request.url);

  response.headers.set("Server", "Next.js Server");
  response.headers.set("Cache-Control", "no-store, must-revalidate");
  response.headers.set("Date", new Date().toUTCString());

  return response;
};

export const middleware = async (request: NextRequest) => {
  // 認証情報を取得
  const _session = await auth();
  // I18nミドルウェアを先に適用
  const i18nResponse = I18nMiddleware(request);

  // セキュリティヘッダーとその他のヘッダーを追加
  const baseResponse = i18nResponse || NextResponse.next();
  const response = addHeaders(request, baseResponse);

  return response;
};

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
