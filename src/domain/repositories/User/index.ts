import {
  DeleteUserParameter,
  GetUserParameter,
  User,
  parseDeleteUserParameter,
  parseGetUserParameter,
} from "~/domain/entities/User";
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

const getUser = async (param: GetUserParameter): Promise<User> => {
  const id = parseGetUserParameter(param);
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) throw new Error("User not found");
  return user;
};

const updateUser = async (user: User): Promise<User> => {
  return prisma.user.update({ where: { id: user.id }, data: user });
};

const deleteUser = async (param: DeleteUserParameter): Promise<User> => {
  const id = parseDeleteUserParameter(param);
  const user = await prisma.user.delete({ where: { id } });
  if (!user) throw new Error("User not found");
  return user;
};

export { createUser, getUsers, getUser, updateUser, deleteUser };

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  describe.skip("repositories/User", () => {});
}
