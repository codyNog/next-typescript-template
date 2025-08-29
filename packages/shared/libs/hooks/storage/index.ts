"use client";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query"; // useQueryをuseSuspenseQueryに変更
import { browserStorage } from "../../browser/storage";

export const useStorage = <T>(key: string, fallbackData: T) => {
  // useQueryをuseSuspenseQueryに置き換え
  const getQuery = useSuspenseQuery<T, Error, T, [string]>({
    // 型引数を調整
    queryKey: [key], // queryKeyを設定
    queryFn: async () => {
      // データ取得に失敗したらfallbackDataを返す
      // useSuspenseQueryは成功するまで待つので、fallbackDataはcatch内で返す
      return browserStorage.get<T>(key).catch(() => fallbackData);
    },
    // initialData は useSuspenseQuery では不要
    // suspense: true も useSuspenseQuery では不要
  });

  // set関数をuseMutationに置き換え
  const setMutation = useMutation<void, Error, T>({
    // 型引数を設定
    mutationFn: async (value: T) => {
      await browserStorage.set<T>(key, value);
    },
    onSuccess: () => {
      getQuery.refetch();
    },
  });

  // remove関数をuseMutationに置き換え
  const removeMutation = useMutation<void, Error, void>({
    // 型引数を設定
    mutationFn: async () => {
      await browserStorage.remove(key);
    },
    onSuccess: () => {
      // 成功したら再取得をトリガー
      getQuery.refetch();
    },
  });

  return {
    // useQueryの結果を返す (dataプロパティに必要なデータが入る)
    get: getQuery,
    // useMutationのmutate関数を返す
    set: setMutation.mutateAsync, // mutateAsyncでPromiseを返すようにする
    remove: removeMutation.mutateAsync, // mutateAsyncでPromiseを返すようにする
  };
};
