import * as Sentry from "@sentry/nextjs";
import { SENTRY_DSN, ENV } from "~/constants/env";
import { ErrorInfo } from "react";

/**
 * Sentry の初期化
 **/
export const initSentry = () => {
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      environment: ENV,
      ignoreErrors: ["ResizeObserver loop limit exceeded"],
      beforeSend(event, hint) {
        // eslint-disable-next-line unicorn/no-null
        if (hint && String(hint.originalException).includes("401")) return null;
        return event;
      },
    });
  }
};
/**
 * Sentry によるエラーキャッチ
 **/
export const catchWithSentry = (error: Error, errorInfo: ErrorInfo) => {
  if (SENTRY_DSN) {
    Sentry.withScope((scope) => {
      for (const key of Object.keys(errorInfo)) {
        scope.setExtra(key, errorInfo.componentStack);
      }
      Sentry.captureException(error);
    });
  }
};
/**
 * Sentry の Configuration
 **/
export const sentryConfig = (uid: string, name: string, loginId: string) => {
  Sentry.configureScope((scope) => {
    scope.setUser({ id: uid, username: name, email: loginId });
  });
};
