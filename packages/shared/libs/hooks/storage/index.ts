"use client";
import useSWR from "swr";
import { browserStorage } from "../../browser/storage";

export const useBrowserStorage = <T>(key: string, fallbackData: T) => {
  const get = useSWR<T>(key, async () => {
    return browserStorage.get<T>(key).catch(() => fallbackData);
  });

  const set = async <T>(value: T) => {
    await browserStorage.set<T>(key, value);
    get.mutate();
  };

  const remove = async () => {
    await browserStorage.remove(key);
  };

  return {
    get,
    set,
    remove,
  };
};
