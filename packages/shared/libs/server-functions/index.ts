import { createSafeActionClient } from "next-safe-action";
import {
  unstable_cacheTag as cache,
  revalidateTag as revalidate,
} from "next/cache";

const base = createSafeActionClient();

/**
 * Server Action Client for cases that do not require authentication
 */
export const actionClient = base;

/**
 * Server Action Client for cases that require authentication
 */
export const authActionClient = actionClient.use(async ({ next, ctx }) => {
  return next({ ctx });
});

/**
 * Server Action Client for cases that require admin authentication
 */
export const adminAuthActionClient = actionClient.use(async ({ next, ctx }) => {
  return next({ ctx });
});

type CacheKey = "readTodos";

export const cacheTag = (cacheKey: CacheKey) => cache(cacheKey);
export const revalidateTag = (cacheKey: CacheKey) => revalidate(cacheKey);
