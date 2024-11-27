import { IS_STORYBOOK } from "shared/constants/env";
import { createTodo } from "shared/domain/Todo";
import { actionClient } from "shared/libs/server-functions";
import { createTodoActionMock } from "./mock";
import {
  createTodoActionParamsSchema,
  createTodoActionReturnValueSchema,
} from "./types";
import type {
  CreateTodoActionParams,
  CreateTodoActionReturnValue,
} from "./types";

const action = actionClient
  .schema(createTodoActionParamsSchema)
  .action(async ({ parsedInput }): Promise<CreateTodoActionReturnValue> => {
    const todo = await createTodo(parsedInput);
    return todo;
  });

export const createTodoAction = async (
  params: CreateTodoActionParams,
): Promise<CreateTodoActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return createTodoActionMock.returnValue;

  const data = (await action(params))?.data;

  if (!data) throw new Error("No data returned from action");

  return createTodoActionReturnValueSchema.parse(data);
};
