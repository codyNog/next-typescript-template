import { IS_STORYBOOK } from "shared/constants/env";
import { readTodos } from "shared/domain/Todo";
import { actionClient } from "shared/libs/server-functions";
import { readTodosActionMock } from "./mock";
import {
  readTodosActionParamsSchema,
  readTodosActionReturnValueSchema,
} from "./types";
import type {
  ReadTodosActionParams,
  ReadTodosActionReturnValue,
} from "./types";

const action = actionClient
  .schema(readTodosActionParamsSchema)
  .action(async ({ parsedInput }): Promise<ReadTodosActionReturnValue> => {
    const todos = await readTodos(parsedInput);
    return todos;
  });

export const readTodosAction = async (
  params: ReadTodosActionParams,
): Promise<ReadTodosActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return readTodosActionMock.returnValue;

  const data = (await action(params))?.data;

  if (!data) throw new Error("No data returned from action");

  return readTodosActionReturnValueSchema.parse(data);
};
