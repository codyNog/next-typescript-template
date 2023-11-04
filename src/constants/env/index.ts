/**
 * @file 環境変数に関する定数を定義するファイル。
 */

/**
 * Sentry の Destination
 * @returns string
 **/
export const SENTRY_DSN = process.env.SENTRY_DSN || "";
/**
 * environment
 * @returns string
 **/
export const ENV = process.env.ENV || "";
