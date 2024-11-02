import { I18nProviderClient } from "../locales/client";
import type { ReactNode } from "react";

const Layout = async ({
  children,
  params,
}: { params: Promise<{ locale: string }>; children: ReactNode }) => {
  const { locale } = await params;

  return (
    <html lang="en">
      <body>
        <main>
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </main>
      </body>
    </html>
  );
};

export default Layout;
