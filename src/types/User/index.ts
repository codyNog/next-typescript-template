import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
});

export type User = z.infer<typeof userSchema>;

export const getUsersParameterSchema = z.object({
  name: z.string().optional(),
  maxAge: z.number().optional(),
});

export type GetUsersParameter = z.infer<typeof getUsersParameterSchema>;
