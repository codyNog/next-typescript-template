import {
  updateTodoParamsSchema,
  updateTodoReturnValueSchema,
} from "shared/domain/Todo/types";
import type { z } from "zod";

export const updateTodoActionParamsSchema = updateTodoParamsSchema;

export type UpdateTodoActionParams = z.infer<
  typeof updateTodoActionParamsSchema
>;

export const updateTodoActionReturnValueSchema = updateTodoReturnValueSchema;

export type UpdateTodoActionReturnValue = z.infer<
  typeof updateTodoActionReturnValueSchema
>;
