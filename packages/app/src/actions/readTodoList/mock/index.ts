import type { ReadTodoListActionReturnValue } from "../types";

const returnValue: ReadTodoListActionReturnValue = {
  data: [
    {
      todoName: "todoName",
      done: false,
      createdAt: new Date(),
      id: "id",
      updatedAt: new Date(),
    },
  ],
  totalCount: 1,
};

export const readTodoListActionMock = {
  returnValue,
};
