import { z } from "zod";
import { insertTodoSchema } from "../../../db/schema/todos/types";

// Create
export const createTodoParamsSchema = insertTodoSchema.pick({
  todoName: true,
  done: true,
});
export type CreateTodoParams = z.infer<typeof createTodoParamsSchema>;

export const createTodoReturnValueSchema = z.object({
  id: z.string(),
  todoName: z.string(),
  done: z.boolean(),
});
export type CreateTodoReturnValue = z.infer<typeof createTodoReturnValueSchema>;

export const bulkCreateTodoParamsSchema = z.array(createTodoParamsSchema);
export type BulkCreateTodoParams = z.infer<typeof bulkCreateTodoParamsSchema>;

export const bulkCreateTodoReturnValueSchema = z.array(
  createTodoReturnValueSchema,
);
export type BulkCreateTodoReturnValue = z.infer<
  typeof bulkCreateTodoReturnValueSchema
>;

// Read
export const readTodoParamsSchema = z.object({ id: z.string().uuid() });
export type ReadTodoParams = z.infer<typeof readTodoParamsSchema>;

export const readTodoReturnValueSchema = z.object({
  todoName: z.string(),
  id: z.string(),
  done: z.boolean(),
});
export type ReadTodoReturnValue = z.infer<typeof readTodoReturnValueSchema>;

const readTodosWhereSchema = z.object({
  todoName: z.string().optional(),
  done: z.boolean().optional(),
});

export const readTodosParamSchema = z.object({
  where: readTodosWhereSchema.optional(),
  orderBy: z
    .object({
      createdAt: z.union([z.literal("asc"), z.literal("desc")]).optional(),
    })
    .optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  with: z.object({}).optional(),
});
export type ReadTodosParams = z.infer<typeof readTodosParamSchema>;

export const readTodosReturnValueSchema = z.array(
  z.object({
    todoName: z.string(),
    id: z.string(),
    done: z.boolean(),
  }),
);
export type ReadTodosReturnValue = z.infer<typeof readTodosReturnValueSchema>;

// Update
export const updateTodoParamsSchema = z.object({
  id: z.string(),
  todoName: z.string(),
  done: z.boolean(),
});

export type UpdateTodoParams = z.infer<typeof updateTodoParamsSchema>;

export const updateTodoReturnValueSchema = z.object({
  id: z.string(),
  todoName: z.string(),
  done: z.boolean(),
});

export type UpdateTodoReturnValue = z.infer<typeof updateTodoReturnValueSchema>;

export const bulkUpdateTodoParamsSchema = z.array(updateTodoParamsSchema);

export type BulkUpdateTodoParams = z.infer<typeof bulkUpdateTodoParamsSchema>;

export const bulkUpdateTodoReturnValueSchema = z.array(
  updateTodoReturnValueSchema,
);

export type BulkUpdateTodoReturnValue = z.infer<
  typeof bulkUpdateTodoReturnValueSchema
>;

// Delete
export const deleteTodoParamsSchema = z.object({ id: z.string() });

export type DeleteTodoParams = z.infer<typeof deleteTodoParamsSchema>;

export const deleteTodoReturnValueSchema = z.object({
  id: z.string(),
  todoName: z.string(),
  done: z.boolean(),
});

export type DeleteTodoReturnValue = z.infer<typeof deleteTodoReturnValueSchema>;

export const bulkDeleteTodoParamsSchema = z.object({
  ids: z.array(z.string()),
});

export type BulkDeleteTodoParams = z.infer<typeof bulkDeleteTodoParamsSchema>;

export const bulkDeleteTodoReturnValueSchema = z.object({});

export type BulkDeleteTodoReturnValue = z.infer<
  typeof bulkDeleteTodoReturnValueSchema
>;
