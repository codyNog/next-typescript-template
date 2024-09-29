import { actionClient } from "@/libs/server-actions";
import { IS_STORYBOOK } from "shared/constants/env";
import { db } from "shared/db";
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
  .action(async ({ parsedInput: _ }): Promise<ReadTodosActionReturnValue> => {
    const todos = await db.query.todos.findMany({});
    return todos;
  });

export const readTodosAction = async (
  params: ReadTodosActionParams,
): Promise<ReadTodosActionReturnValue> => {
  "use server";

  // TODO: fix storybook workaround
  if (IS_STORYBOOK) return readTodosActionMock.returnValue;

  const data = (await action(params))?.data;

  if (!data) throw new Error("data not found");

  return readTodosActionReturnValueSchema.parse(data);
};
