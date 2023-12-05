import {
  Input,
  array,
  email,
  number,
  object,
  parse,
  string,
  uuid,
} from "valibot";
import { User as PrismaUser } from "@prisma/client";
import { propertySchema } from "~/domain/entities/Property";

const UserSchema = object({
  id: string([uuid()]),
  email: string([email()]),
  name: string(),
  age: number(),
  properties: array(propertySchema),
});

/**
 * User 概念の型定義
 **/
export type User = Input<typeof UserSchema>;

/**
 * User 概念の型定義をパースする
 * @returns User
 */
export const parseUser = (User: unknown): User => parse(UserSchema, User);

/**
 * Prisma のスキーマ定義と User 概念の型定義が一致しているかを検証する
 */
const _u = parseUser({
  id: "5ae864f6-4fad-4f64-98b6-54048c3b9c83",
  email: "example@example.com",
  name: "foo",
  age: 1,
  properties: [],
}) satisfies PrismaUser;

const getUserParameterSchema = string([uuid()]);

export type GetUserParameter = Input<typeof getUserParameterSchema>;

export const parseGetUserParameter = (
  getUserParameter: unknown
): GetUserParameter => parse(getUserParameterSchema, getUserParameter);

const deleteUserParameterSchema = string([uuid()]);

export type DeleteUserParameter = Input<typeof deleteUserParameterSchema>;

export const parseDeleteUserParameter = (
  deleteUserParameter: unknown
): DeleteUserParameter => parse(deleteUserParameterSchema, deleteUserParameter);

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
      expect(parseUser(valid)).toStrictEqual(valid);
    });
  });
}
