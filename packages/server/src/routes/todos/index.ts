import Elysia from "elysia";
import { readTodos } from "shared/domain/Todo";

export const todos = new Elysia().get(
  "/todos",
  async () => await readTodos({}),
);
