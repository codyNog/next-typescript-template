import { I18nProviderClient } from "@/locales/client";
import { getCurrentLocale } from "@/locales/server";
import type { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const locale = getCurrentLocale();

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
