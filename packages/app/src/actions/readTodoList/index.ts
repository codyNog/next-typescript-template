import { IS_STORYBOOK } from "shared/constants/env";
import { countTodos, readTodos } from "shared/domain/Todo";
import type { ReadTodosParams } from "shared/domain/Todo/types";
import { actionClient } from "shared/libs/server-functions";
import { readTodoListActionMock } from "./mock";
import {
  readTodoListActionParamsSchema,
  readTodoListActionReturnValueSchema,
} from "./types";
import type {
  ReadTodoListActionParams,
  ReadTodoListActionReturnValue,
} from "./types";

const action = actionClient
  .schema(readTodoListActionParamsSchema)
  .action(async ({ parsedInput }): Promise<ReadTodoListActionReturnValue> => {
    const params: ReadTodosParams = {
      where: parsedInput.where,
      orderBy: parsedInput.orderBy,
      limit: parsedInput.limit,
      offset: parsedInput.limit * (parsedInput.page - 1),
    };
    const [todos, count] = await Promise.all([
      readTodos(params),
      countTodos(parsedInput),
    ]);

    return {
      data: todos,
      totalCount: count,
    };
  });

export const readTodoListAction = async (
  params: ReadTodoListActionParams,
): Promise<ReadTodoListActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return readTodoListActionMock.returnValue;

  const data = (await action(params))?.data;

  if (!data) throw new Error("No data returned from action");

  return readTodoListActionReturnValueSchema.parse(data);
};
