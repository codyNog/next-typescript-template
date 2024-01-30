import {
  Input,
  array,
  email,
  literal,
  minLength,
  number,
  object,
  omit,
  optional,
  safeParse,
  string,
  union,
  uuid,
} from "valibot";
import { propertySchema } from "~/domain/entities/Property";

export const userSchema = object({
  id: string([uuid()]),
  email: string([email("email must be valid")]),
  name: string([minLength(1)]),
  age: number(),
  properties: array(propertySchema),
});

/**
 * User 概念の型定義
 **/
export type User = Input<typeof userSchema>;

/**
 * User 概念の型定義をパースする
 * @returns User
 */
export const parseUser = (user: unknown) => safeParse(userSchema, user);

const createUserParameterSchema = omit(userSchema, ["id"]);

export type CreateUserParameter = Input<typeof createUserParameterSchema>;

export const parseCreateUserParameter = (parameter: unknown) =>
  safeParse(createUserParameterSchema, parameter);

const getUserParameterSchema = string([uuid()]);

export type GetUserParameter = Input<typeof getUserParameterSchema>;

export const parseGetUserParameter = (getUserParameter: unknown) =>
  safeParse(getUserParameterSchema, getUserParameter);

const getUsersParameterSchema = object({
  name: optional(string()),
  maxAge: optional(number()),
  minAge: optional(number()),
  orderBy: optional(union([literal("name"), literal("age")])),
  sortKey: optional(union([literal("asc"), literal("desc")])),
});

export type GetUsersParameter = Input<typeof getUsersParameterSchema>;

export const parseGetUsersParameter = (getUsersParameter: unknown) =>
  safeParse(getUsersParameterSchema, getUsersParameter);

const deleteUserParameterSchema = string([uuid()]);

export type DeleteUserParameter = Input<typeof deleteUserParameterSchema>;

export const parseDeleteUserParameter = (deleteUserParameter: unknown) =>
  safeParse(deleteUserParameterSchema, deleteUserParameter);

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  describe("entities/User", () => {
    it("parseUser", () => {
      const valid: User = {
        id: "5ae864f6-4fad-4f64-98b6-54048c3b9c83",
        email: "example@example.com",
        name: "foo",
        age: 1,
        properties: [],
      };
      expect(parseUser(valid).output).toStrictEqual(valid);
    });
  });
}
