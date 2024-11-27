import { createTodoParamsSchema } from "shared/domain/Todo/types";
import { z } from "zod";

export const createTodoActionParamsSchema = createTodoParamsSchema;

export type CreateTodoActionParams = z.infer<
  typeof createTodoActionParamsSchema
>;

export const createTodoActionReturnValueSchema = z.object({});

export type CreateTodoActionReturnValue = z.infer<
  typeof createTodoActionReturnValueSchema
>;
