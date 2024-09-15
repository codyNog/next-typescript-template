import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ja"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  // I18nミドルウェアを先に適用
  const i18nResponse = I18nMiddleware(request);

  // セキュリティヘッダーとその他のヘッダーを追加
  const response = i18nResponse || NextResponse.next();

  // セキュリティヘッダー
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );

  // Content Security Policy (CSP)
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;",
  );

  // HSTS (HTTP Strict Transport Security)
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

  const clientIP = request.ip || "Unknown";
  response.headers.set("X-Forwarded-For", clientIP);

  response.headers.set("X-Request-Method", request.method);
  response.headers.set("X-Request-URL", request.url);

  response.headers.set("Server", "Next.js Server");
  response.headers.set("Cache-Control", "no-store, must-revalidate");
  response.headers.set("Date", new Date().toUTCString());

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
