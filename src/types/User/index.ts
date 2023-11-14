import { Input, number, object, optional, string } from "valibot";

export const userSchema = object({
  id: string(),
  name: string(),
  age: number(),
});

/**
 * User 概念の型定義
 **/
export type User = Input<typeof userSchema>;

export const getUsersParameterSchema = object({
  name: optional(string()),
  maxAge: optional(number()),
});

/**
 * User 一覧を取得するためのパラメータ
 **/
export type GetUsersParameter = Input<typeof getUsersParameterSchema>;
