import { IS_STORYBOOK } from "shared/constants/env";
import { readTodo } from "shared/domain/Todo/index";
import { actionClient } from "shared/libs/server-functions";
import { readTodoActionMock } from "./mock";
import {
  readTodoActionParamsSchema,
  readTodoActionReturnValueSchema,
} from "./types";
import type { ReadTodoActionParams, ReadTodoActionReturnValue } from "./types";

const action = actionClient
  .schema(readTodoActionParamsSchema)
  .action(async ({ parsedInput }): Promise<ReadTodoActionReturnValue> => {
    const todo = await readTodo(parsedInput);
    return todo;
  });

export const readTodoAction = async (
  params: ReadTodoActionParams,
): Promise<ReadTodoActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return readTodoActionMock.returnValue;

  const data = (await action(params))?.data;

  if (!data) throw new Error("No data returned from action");

  return readTodoActionReturnValueSchema.parse(data);
};
