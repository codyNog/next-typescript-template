import { describe, expect, it } from "bun:test";
import {
  bulkCreateTodo,
  bulkDeleteTodo,
  bulkUpdateTodo,
  createTodo,
  deleteTodo,
  readTodos,
  updateTodo,
} from ".";
import type {
  BulkCreateTodoParams,
  BulkDeleteTodoParams,
  BulkUpdateTodoParams,
  CreateTodoParams,
  DeleteTodoParams,
  UpdateTodoParams,
} from "./types";

describe("domain/Todo", async () => {
  it("create", async () => {
    const params: CreateTodoParams = { todoName: "test", done: false };
    const todo = await createTodo(params);
    expect(todo).toMatchObject(params);
  });

  it("bulkCreate", async () => {
    const params: BulkCreateTodoParams = [
      { todoName: "test", done: false },
      { todoName: "test2", done: true },
    ];
    const todos = await bulkCreateTodo(params);
    expect(todos).toHaveLength(2);
  });

  it("update", async () => {
    const prev = (await readTodos({}))[0];
    console.log(prev);
    const updateParams: UpdateTodoParams = {
      id: prev.id,
      todoName: "update",
      done: true,
    };
    const todo = await updateTodo(updateParams);
    expect(todo).toMatchObject(updateParams);
  });

  it("bulkUpdate", async () => {
    const prev = await readTodos({});
    const updateParams: BulkUpdateTodoParams = prev.map((todo) => ({
      id: todo.id,
      todoName: "update",
      done: true,
    }));
    const todos = await bulkUpdateTodo(updateParams);
    for (const todo of todos) {
      const target = updateParams.find((t) => t.id === todo.id);
      expect(target).toBeTruthy();
      if (!target) throw new Error("target should be defined");
      expect(todo).toMatchObject(target);
    }
  });

  it("delete", async () => {
    const prev = (await readTodos({}))[0];
    const params: DeleteTodoParams = { id: prev.id };
    await deleteTodo(params);
    const todos = await readTodos({});
    expect(todos).not.toContainEqual(prev);
  });

  it("bulkDelete", async () => {
    const prev = await readTodos({});
    const deleteParams: BulkDeleteTodoParams = {
      ids: prev.map(({ id }) => id),
    };
    await bulkDeleteTodo(deleteParams);
    const todos = await readTodos({});
    expect(todos).toHaveLength(0);
  });
});
