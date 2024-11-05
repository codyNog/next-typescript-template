import { eq } from "drizzle-orm";
import { db } from "../../db";
import { todos } from "../../db/schema";
import { readTodosParamsToQuery } from "./modules";
import {
  type BulkCreateTodoParams,
  type BulkCreateTodoReturnValue,
  type BulkDeleteTodoParams,
  type BulkDeleteTodoReturnValue,
  type BulkUpdateTodoParams,
  type BulkUpdateTodoReturnValue,
  type CreateTodoParams,
  type CreateTodoReturnValue,
  type DeleteTodoParams,
  type DeleteTodoReturnValue,
  type ReadTodoParams,
  type ReadTodosParams,
  type UpdateTodoParams,
  type UpdateTodoReturnValue,
  bulkCreateTodoReturnValueSchema,
  createTodoReturnValueSchema,
} from "./types";

export const createTodo = async (
  params: CreateTodoParams,
): Promise<CreateTodoReturnValue> => {
  const todo = await db
    .insert(todos)
    .values({ ...params })
    .returning();

  return createTodoReturnValueSchema.parse(todo[0]);
};

export const bulkCreateTodo = async (
  params: BulkCreateTodoParams,
): Promise<BulkCreateTodoReturnValue> => {
  const list = await db.insert(todos).values(params).returning();

  return bulkCreateTodoReturnValueSchema.parse(list);
};

export const readTodo = async (params: ReadTodoParams) => {
  const todo = await db.query.todos.findFirst({
    where: eq(todos.id, params.id),
  });

  if (!todo) throw new Error("Todo not found");

  return todo;
};

export const readTodos = async (params: ReadTodosParams) => {
  const query = readTodosParamsToQuery(params);

  const todos = await db.query.todos.findMany(query);
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
