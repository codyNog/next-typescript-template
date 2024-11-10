import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { root } from "./routes";
import { todos } from "./routes/todos";
import { todosId } from "./routes/todos/:id";

export const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "API Documentation",
          version: "1.0.0",
          description: "Auto-routed API endpoints with Swagger documentation",
        },
      },
    }),
  )
  .use(root)
  .use(todos)
  .use(todosId)
  .listen(4000);
