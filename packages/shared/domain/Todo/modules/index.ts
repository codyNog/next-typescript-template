import { type SQL, and, asc, desc, eq, ilike } from "drizzle-orm";
import { todos } from "../../../db/schema";
import type { ReadTodosParams } from "../types";

export const readTodosParamsToQuery = (
  params: ReadTodosParams,
): {
  where: SQL | undefined;
  orderBy: SQL[] | undefined;
  limit: number | undefined;
  offset: number | undefined;
  with: Record<string, unknown> | undefined;
} => {
  const where: SQL[] = [];

  if (params.where?.todoName !== undefined) {
    where.push(ilike(todos.todoName, `%${params.where.todoName}%`));
  }
  if (params.where?.done !== undefined) {
    where.push(eq(todos.done, params.where.done));
  }

  // orderByの変換（createdAtのみ対応）
  const orderBy = params.orderBy?.createdAt
    ? [
        params.orderBy.createdAt === "desc"
          ? desc(todos.createdAt)
          : asc(todos.createdAt),
      ]
    : undefined;

  return {
    where: where.length > 0 ? and(...where) : undefined,
    orderBy,
    limit: params.limit,
    offset: params.offset,
    with: {},
  };
};
