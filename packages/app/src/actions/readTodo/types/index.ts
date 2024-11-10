import { readTodoParamsSchema } from "shared/domain/Todo/types";
import { z } from "zod";

export const readTodoActionParamsSchema = readTodoParamsSchema;

export type ReadTodoActionParams = z.infer<typeof readTodoActionParamsSchema>;

export const readTodoActionReturnValueSchema = z.object({
  todoName: z.string(),
  id: z.string(),
  done: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ReadTodoActionReturnValue = z.infer<
  typeof readTodoActionReturnValueSchema
>;
