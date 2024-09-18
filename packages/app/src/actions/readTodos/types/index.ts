import { z } from "zod";

export const readTodosActionParamsSchema = z.object({});

export type ReadTodosActionParams = z.infer<typeof readTodosActionParamsSchema>;

export const readTodosActionReturnValueSchema = z.array(z.object({}));

export type ReadTodosActionReturnValue = z.infer<
  typeof readTodosActionReturnValueSchema
>;
