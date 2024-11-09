"use client";
import localForage from "localforage";
import { type ReactNode, useEffect, useState } from "react";
import { initializeStorage } from "../../browser/storage";

export const StorageProvider = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initializeStorage();
        // LocalForageの初期化完了を待つ
        await localForage.ready();
        setIsReady(true);
      } catch (error) {
        console.error("Storage initialization failed:", error);
      }
    };

    initialize();
  }, []);

  // 初期化が完了するまで子コンポーネントをレンダリングしない
  if (!isReady) {
    return null; // または loading コンポーネントを表示
  }

  return <>{children}</>;
};
