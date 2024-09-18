import { boolean, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const todos = pgTable("todos", {
  id: uuid("id").primaryKey().defaultRandom(),
  todoName: varchar("todoName", { length: 256 }).notNull(),
  done: boolean("done").notNull().default(false),
});

export const insertTodoSchema = createInsertSchema(todos);

export const selectTodoSchema = createSelectSchema(todos);
