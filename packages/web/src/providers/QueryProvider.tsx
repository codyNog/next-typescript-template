"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import type { ReactNode } from "react"; // ReactNodeをreactから明示的にインポート

type Props = {
  children: ReactNode;
};

export const QueryProvider = ({ children }: Props) => {
  // QueryClientのインスタンスを作成（コンポーネントの再レンダリングで再生成されないようにuseStateを使用）
  const [queryClient] = useState(() => new QueryClient());

  return (
    // QueryClientProviderでラップ
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 開発環境でのみReact Query DevToolsを表示 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
