import { Input, object, parse } from "valibot";

const UserSchema = object({});

/**
 * User 概念の型定義
 **/
export type User = Input<typeof UserSchema>;

/**
 * User 概念の型定義をパースする
 * @returns User
 */
export const parseUser = (User: unknown): User => parse(UserSchema, User);

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  describe("entities/User", () => {
    it("parseUser", () => {
      const valid: User = {};
      expect(parseUser(valid)).toStrictEqual(valid);
    });
  });
}
