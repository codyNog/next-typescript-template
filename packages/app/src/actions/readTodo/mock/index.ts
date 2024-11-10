import type { ReadTodoActionReturnValue } from "../types";

const returnValue: ReadTodoActionReturnValue = {
  id: "id",
  todoName: "todoName",
  done: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const readTodoActionMock = {
  returnValue,
};
