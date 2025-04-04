import type { ReactNode } from "react";
import { QueryProvider } from "../src/providers/QueryProvider"; // 正しい相対パスに変更

// params を受け取るように Props を修正
export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string }; // locale パラメータを受け取る
}) {
  // locale を取得し、デフォルト値を設定
  const lang = params.locale || "en";

  return (
    // <html> タグに lang 属性を設定
    <html lang={lang}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
// generateStaticParams はここでは不要なので削除
