import type { ReadTodoDetailActionReturnValue } from "../types";

const returnValue: ReadTodoDetailActionReturnValue = {
  id: "id",
  todoName: "todoName",
  done: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const readTodoDetailActionMock = {
  returnValue,
};
