import { User } from "~/domain/entities/User";
import { prisma } from "~/libs/prisma";

/**
 * User 一件作成
 * @returns 新規作成 User
 **/
const createUser = async (user: User): Promise<User> => {
  return prisma.user.create({ data: user });
};

/**
 * User 全件取得
 * @returns User[]
 **/
const getUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export { createUser, getUsers };

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  describe.skip("repositories/User", () => {});
}
