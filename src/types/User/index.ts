import { z } from "zod";

const zodUser = z.object({ id: z.string(), name: z.string(), age: z.number() });

export type User = z.infer<typeof zodUser>;

const zodGetUsersParameter = z.object({
  name: z.string().optional(),
  maxAge: z.number().optional(),
});

export type GetUsersParameter = z.infer<typeof zodGetUsersParameter>;
