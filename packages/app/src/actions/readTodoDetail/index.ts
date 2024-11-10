import { IS_STORYBOOK } from "shared/constants/env";
import { readTodo } from "shared/domain/Todo";
import { actionClient } from "shared/libs/server-functions";
import { readTodoDetailActionMock } from "./mock";
import {
  readTodoDetailActionParamsSchema,
  readTodoDetailActionReturnValueSchema,
} from "./types";
import type {
  ReadTodoDetailActionParams,
  ReadTodoDetailActionReturnValue,
} from "./types";

const action = actionClient
  .schema(readTodoDetailActionParamsSchema)
  .action(async ({ parsedInput }): Promise<ReadTodoDetailActionReturnValue> => {
    const todo = await readTodo({ id: parsedInput.id });
    return todo;
  });

export const readTodoDetailAction = async (
  params: ReadTodoDetailActionParams,
): Promise<ReadTodoDetailActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return readTodoDetailActionMock.returnValue;

  const data = (await action(params))?.data;

  if (!data) throw new Error("No data returned from action");

  return readTodoDetailActionReturnValueSchema.parse(data);
};
