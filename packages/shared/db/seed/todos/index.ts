import { db } from "../..";
import { todos } from "../../schema/todos";
import type { InsertTodoSchema } from "../../schema/todos/types";

const seed: InsertTodoSchema[] = [
  {
    todoName: "Learn TypeScript",
    done: true,
  },
  {
    todoName: "Learn GraphQL",
    done: false,
  },
  {
    todoName: "Learn Rust",
    done: false,
  },
];

console.log(seed);

export const seedTodos = async () => {
  console.log("start seeding todos");
  const result = await db.insert(todos).values(seed).returning();
  console.log(result);
  console.log("done seeding todos");
};
