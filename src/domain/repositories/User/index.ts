import { User } from "~/domain/entities/User";

/**
 * User 一件作成
 * @returns 新規作成 User
 **/
const createUser = async (user: User): Promise<User> => {
  return user;
};

export { createUser };

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  describe.skip("repositories/User", () => {});
}
