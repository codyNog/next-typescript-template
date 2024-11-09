import type { ReactNode } from "react";
import { I18nProviderClient } from "shared/libs/i18n/client";
import { StorageProvider } from "shared/libs/providers/storage";

const Layout = async ({
  children,
  params,
}: { params: Promise<{ locale: string }>; children: ReactNode }) => {
  const { locale } = await params;

  return (
    <html lang="en">
      <body>
        <main>
          <I18nProviderClient locale={locale}>
            <StorageProvider>{children}</StorageProvider>
          </I18nProviderClient>
        </main>
      </body>
    </html>
  );
};

export default Layout;
