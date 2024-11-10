import { readTodoParamsSchema } from "shared/domain/Todo/types";
import { z } from "zod";

export const readTodoDetailActionParamsSchema = readTodoParamsSchema;

export type ReadTodoDetailActionParams = z.infer<
  typeof readTodoDetailActionParamsSchema
>;

export const readTodoDetailActionReturnValueSchema = z.object({
  todoName: z.string(),
  id: z.string(),
  done: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ReadTodoDetailActionReturnValue = z.infer<
  typeof readTodoDetailActionReturnValueSchema
>;
