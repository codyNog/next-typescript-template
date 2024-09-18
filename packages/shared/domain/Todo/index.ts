import type {
  CreateTodoParams,
  CreateTodoReturnValue,
  BulkCreateTodoParams,
  BulkCreateTodoReturnValue,
  BulkUpdateTodoParams,
  BulkUpdateTodoReturnValue,
  BulkDeleteTodoParams,
  BulkDeleteTodoReturnValue,
  UpdateTodoParams,
  UpdateTodoReturnValue,
  DeleteTodoParams,
  DeleteTodoReturnValue,
} from "./types";
import { db } from "../../db";
import { todos } from "../../db/schema";
import { eq } from "drizzle-orm";

export const createTodo = async (
  params: CreateTodoParams,
): Promise<CreateTodoReturnValue> => {
  const todo = await db
    .insert(todos)
    .values({ ...params })
    .returning();

  return todo[0];
};

export const bulkCreateTodo = async (
  params: BulkCreateTodoParams,
): Promise<BulkCreateTodoReturnValue> => {
  const list = await db.insert(todos).values(params).returning();

  return list;
};

/**
 * Read all todos
 * This is created for testing purposes.
 * In reality, the required types may differ depending on the calling component,
 * so detailed implementation is not provided here.
 */
export const readTodos = async () => {
  const todos = await db.query.todos.findMany();

  return todos;
};

export const updateTodo = async (
  params: UpdateTodoParams,
): Promise<UpdateTodoReturnValue> => {
  const todo = await db
    .update(todos)
    .set(params)
    .where(eq(todos.id, params.id))
    .returning();

  return todo[0];
};

export const bulkUpdateTodo = async (
  params: BulkUpdateTodoParams,
): Promise<BulkUpdateTodoReturnValue> => {
  const data = await db.transaction(async (tx) => {
    const promises = params.map((param) => {
      return tx
        .update(todos)
        .set(param)
        .where(eq(todos.id, param.id))
        .returning();
    });
    const results = await Promise.all(promises);

    return results.flat();
  });

  return data;
};

export const deleteTodo = async (
  params: DeleteTodoParams,
): Promise<DeleteTodoReturnValue> => {
  const todo = await db
    .delete(todos)
    .where(eq(todos.id, params.id))
    .returning();
  return todo[0];
};

export const bulkDeleteTodo = async (
  params: BulkDeleteTodoParams,
): Promise<BulkDeleteTodoReturnValue> => {
  const data = await db.transaction(async (tx) => {
    const promises = params.ids.map((id) => {
      return tx.delete(todos).where(eq(todos.id, id)).returning();
    });
    const results = await Promise.all(promises);

    return results.flat();
  });

  return data;
};
