import Elysia from "elysia";
import { readTodo } from "shared/domain/Todo";

export const todosId = new Elysia().get("/todos/:id", async (context) => {
  return await readTodo({ id: context.params.id });
});
