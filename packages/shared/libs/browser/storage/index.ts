"use client";
import localforage from "localforage";

export const initializeStorage = async () => {
  if (typeof window !== "undefined") {
    localforage.config({
      name: "myApp",
      storeName: "keyvaluepairs",
      driver: [localforage.INDEXEDDB || "asyncStorage"],
    });

    return localforage.ready();
  }
};

const get = async <T>(key: string): Promise<T> => {
  const data = await localforage.getItem<T>(key);
  if (!data) {
    throw new Error(`No data found for key: ${key}`);
  }
  return data;
};

const set = async <T>(key: string, value: T): Promise<T> => {
  const data = await localforage.setItem<T>(key, value);
  if (!data) {
    throw new Error(`Failed to set data for key: ${key}`);
  }
  return data;
};

const remove = async (key: string): Promise<void> => {
  await localforage.removeItem(key).catch(() => {
    throw new Error(`Failed to remove data for key: ${key}`);
  });
};

export const browserStorage = {
  get,
  set,
  remove,
};
