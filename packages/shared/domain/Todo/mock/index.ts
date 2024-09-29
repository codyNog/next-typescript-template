import type {
  BulkCreateTodoParams,
  BulkCreateTodoReturnValue,
  BulkDeleteTodoParams,
  BulkDeleteTodoReturnValue,
  BulkUpdateTodoParams,
  BulkUpdateTodoReturnValue,
  CreateTodoParams,
  CreateTodoReturnValue,
  DeleteTodoParams,
  DeleteTodoReturnValue,
  UpdateTodoParams,
  UpdateTodoReturnValue,
} from "../types";

// Create
const createParams: CreateTodoParams = {
  todoName: "string",
  done: true,
};
const createReturnValue: CreateTodoReturnValue = {
  id: "string",
  todoName: "string",
  done: true,
};

const bulkCreateParams: BulkCreateTodoParams = [];
const bulkCreateReturnValue: BulkCreateTodoReturnValue = [];

// Update
const updateParams: UpdateTodoParams = {
  id: "string",
  todoName: "string",
  done: true,
};
const updateReturnValue: UpdateTodoReturnValue = {
  id: "string",
  todoName: "string",
  done: true,
};

const bulkUpdateParams: BulkUpdateTodoParams = [];
const bulkUpdateReturnValue: BulkUpdateTodoReturnValue = [];

// Delete
const deleteParams: DeleteTodoParams = {
  id: "string",
};
const deleteReturnValue: DeleteTodoReturnValue = {
  id: "string",
  todoName: "string",
  done: true,
};

const bulkDeleteParams: BulkDeleteTodoParams = { ids: ["string"] };
const bulkDeleteReturnValue: BulkDeleteTodoReturnValue = [];

export const todoMock = {
  createParams,
  createReturnValue,
  updateParams,
  updateReturnValue,
  deleteParams,
  deleteReturnValue,
  bulkCreateParams,
  bulkCreateReturnValue,
  bulkUpdateParams,
  bulkUpdateReturnValue,
  bulkDeleteParams,
  bulkDeleteReturnValue,
};
