"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react"; // ReactNodeをreactから明示的にインポート
import { I18nProviderClient } from "shared/libs/i18n/client";
import { StorageProvider } from "shared/libs/providers/storage";
import { UIProvider } from "ui/Provider";

type Props = {
  children: ReactNode;
  locale?: string;
};

export const Providers = ({ children, locale }: Props) => {
  // QueryClientのインスタンスを作成（コンポーネントの再レンダリングで再生成されないようにuseStateを使用）
  const [queryClient] = useState(() => new QueryClient());

  return (
    <UIProvider linkComponent={Link}>
      {/* QueryClientProviderでラップ */}
      <QueryClientProvider client={queryClient}>
        <I18nProviderClient locale={locale || "en"}>
          {/* locale がない場合のデフォルト値 */}
          <StorageProvider>{children}</StorageProvider>
        </I18nProviderClient>
        {/* 開発環境でのみReact Query DevToolsを表示 */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UIProvider>
  );
};
