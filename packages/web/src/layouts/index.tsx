import type { ReactNode } from "react";
import { Providers } from "../providers";

// params を受け取らないように Props を修正
// params が Promise である可能性を考慮して型を修正
type Props = { children: ReactNode; params: Promise<{ locale: string }> };

// async を再度追加
const Layout = async ({ children, params }: Props) => {
  // <html>, <body>, <main> を削除
  // lang 属性の設定ロジックも削除
  // generateStaticParams も削除

  // I18nProviderClient に locale を渡す必要があるので params は残す
  // params を await する
  const { locale } = await params;

  return <Providers locale={locale}>{children}</Providers>;
};

export default Layout;
