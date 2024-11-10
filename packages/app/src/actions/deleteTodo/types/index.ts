import { deleteTodoParamsSchema } from "shared/domain/Todo/types";
import { z } from "zod";

export const deleteTodoActionParamsSchema = deleteTodoParamsSchema;

export type DeleteTodoActionParams = z.infer<
  typeof deleteTodoActionParamsSchema
>;

export const deleteTodoActionReturnValueSchema = z.object({});

export type DeleteTodoActionReturnValue = z.infer<
  typeof deleteTodoActionReturnValueSchema
>;
