import type { UpdateTodoActionReturnValue } from "../types";

const returnValue: UpdateTodoActionReturnValue = {
  id: "id",
  todoName: "todoName",
  done: false,
};

export const updateTodoActionMock = {
  returnValue,
};
