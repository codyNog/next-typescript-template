import { readTodosParamSchema } from "shared/domain/Todo/types";
import { z } from "zod";

export const readTodoListActionParamsSchema = readTodosParamSchema
  .pick({
    where: true,
    orderBy: true,
    limit: true,
  })
  .extend({
    limit: z.number(),
    page: z.number(),
  });

export type ReadTodoListActionParams = z.infer<
  typeof readTodoListActionParamsSchema
>;

export const readTodoListActionReturnValueSchema = z.object({
  data: z.array(
    z.object({
      todoName: z.string(),
      done: z.boolean(),
      createdAt: z.date(),
      id: z.string(),
      updatedAt: z.date(),
    }),
  ),
  totalCount: z.number(),
});

export type ReadTodoListActionReturnValue = z.infer<
  typeof readTodoListActionReturnValueSchema
>;
