import { createSafeActionClient } from "next-safe-action";

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
