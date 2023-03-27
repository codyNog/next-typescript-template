import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
});
/**
 * User 概念の型定義
 **/
export type User = z.infer<typeof userSchema>;

export const getUsersParameterSchema = z.object({
  name: z.string().optional(),
  maxAge: z.number().optional(),
});
/**
 * User 一覧を取得するためのパラメータ
 **/
export type GetUsersParameter = z.infer<typeof getUsersParameterSchema>;
