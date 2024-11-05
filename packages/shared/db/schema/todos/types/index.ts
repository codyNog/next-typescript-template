import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { todos } from "..";

export const insertTodoSchema = createInsertSchema(todos);
export type InsertTodoSchema = z.infer<typeof insertTodoSchema>;

export const selectTodoSchema = createSelectSchema(todos);
export type SelectTodoSchema = z.infer<typeof selectTodoSchema>;
