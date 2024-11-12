import { readTodo } from "shared/domain/Todo";
import Elysia from "elysia";

export const todosId = new Elysia().get("/todos/:id", async (context) => {
  return await readTodo({ id: context.params.id });
});
