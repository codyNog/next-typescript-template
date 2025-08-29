import { createSafeActionClient } from "next-safe-action";

/**
 * Server Function のエラータイプ定数
 * @readonly
 */
export const FUNCTION_ERROR_TYPES = {
  /** サーバーサイドでエラーが発生した場合 */
  SERVER_ERROR: "SERVER_ERROR",
  /** バリデーションエラーが発生した場合 */
  VALIDATION_ERROR: "VALIDATION_ERROR",
  /** 予期しないエラーが発生した場合 */
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

/**
 * Server Function のエラー型
 * @property {string} type - エラーの種類
 * @property {string} message - エラーメッセージ
 * @property {unknown} [details] - エラーの詳細情報（オプション）
 */
export type FunctionError = {
  type: (typeof FUNCTION_ERROR_TYPES)[keyof typeof FUNCTION_ERROR_TYPES];
  message: string;
  details?: unknown;
};

/**
 * 通常の Server Function 用クライアント
 * @description next-safe-action を使用した型安全な Server Function クライアント
 * @example
 * ```typescript
 * const serverFunction = functionClient
 *   .inputSchema(mySchema)
 *   .action(async ({ parsedInput }) => {
 *     // Server Function の実装
 *   });
 * ```
 */
export const functionClient = createSafeActionClient();

/**
 * 管理者権限が必要な Server Function 用クライアント
 * @description 認証・認可などのミドルウェア処理を追加可能なクライアント
 * @example
 * ```typescript
 * const adminFunction = adminFunctionClient
 *   .inputSchema(mySchema)
 *   .action(async ({ parsedInput }) => {
 *     // 管理者用 Server Function の実装
 *   });
 * ```
 */
export const adminFunctionClient = createSafeActionClient().use(
  async ({ next }) => {
    // TODO: ここに実際の認証・認可処理を実装する
    // 例:
    // const session = await getServerSession();
    // if (!session?.user?.isAdmin) {
    //   throw new Error("Unauthorized: Admin access required");
    // }

    const result = await next();
    return result;
  },
);
