import { Providers } from "../providers";
import "ui/global.css";

type Props = LayoutProps<"/[locale]">;

const Layout = async ({ children, params }: Props) => {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
