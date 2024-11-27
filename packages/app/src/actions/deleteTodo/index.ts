import { IS_STORYBOOK } from "shared/constants/env";
import { deleteTodo } from "shared/domain/Todo";
import { actionClient } from "shared/libs/server-functions";
import { deleteTodoActionMock } from "./mock";
import {
  deleteTodoActionParamsSchema,
  deleteTodoActionReturnValueSchema,
} from "./types";
import type {
  DeleteTodoActionParams,
  DeleteTodoActionReturnValue,
} from "./types";

const action = actionClient
  .schema(deleteTodoActionParamsSchema)
  .action(async ({ parsedInput }): Promise<DeleteTodoActionReturnValue> => {
    await deleteTodo(parsedInput);
    return {};
  });

export const deleteTodoAction = async (
  params: DeleteTodoActionParams,
): Promise<DeleteTodoActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return deleteTodoActionMock.returnValue;

  const data = (await action(params))?.data;

  if (!data) throw new Error("No data returned from action");

  return deleteTodoActionReturnValueSchema.parse(data);
};
