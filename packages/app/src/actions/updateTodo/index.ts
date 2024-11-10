import { IS_STORYBOOK } from "shared/constants/env";
import { updateTodo } from "shared/domain/Todo";
import { actionClient } from "shared/libs/server-functions";
import { updateTodoActionMock } from "./mock";
import {
  updateTodoActionParamsSchema,
  updateTodoActionReturnValueSchema,
} from "./types";
import type {
  UpdateTodoActionParams,
  UpdateTodoActionReturnValue,
} from "./types";

const action = actionClient
  .schema(updateTodoActionParamsSchema)
  .action(async ({ parsedInput }): Promise<UpdateTodoActionReturnValue> => {
    const todo = updateTodo(parsedInput);
    return todo;
  });

export const updateTodoAction = async (
  params: UpdateTodoActionParams,
): Promise<UpdateTodoActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return updateTodoActionMock.returnValue;

  const data = (
    await action(params).catch((e) => {
      throw new Error(e);
    })
  )?.data;

  if (!data) throw new Error("No data returned from action");

  return updateTodoActionReturnValueSchema.parse(data);
};
