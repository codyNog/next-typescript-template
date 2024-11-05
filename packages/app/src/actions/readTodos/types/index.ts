import { readTodosParamSchema } from "shared/domain/Todo/types";
import { z } from "zod";

const readTodosActionWhereSchema = readTodosParamSchema.shape.where
  .unwrap()
  .pick({ todoName: true });

export const readTodosActionParamsSchema = readTodosParamSchema.extend({
  where: readTodosActionWhereSchema.optional(),
});

export type ReadTodosActionParams = z.infer<typeof readTodosActionParamsSchema>;

export const readTodosActionReturnValueSchema = z.array(
  z.object({
    todoName: z.string(),
    id: z.string(),
    done: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
);

export type ReadTodosActionReturnValue = z.infer<
  typeof readTodosActionReturnValueSchema
>;
