import {
  CreateUserParameter,
  DeleteUserParameter,
  GetUserParameter,
  GetUsersParameter,
  User,
  parseCreateUserParameter,
  parseDeleteUserParameter,
  parseGetUserParameter,
  parseGetUsersParameter,
  parseUser,
} from "~/domain/entities/User";
import { prisma } from "~/libs/prisma";

/**
 * User 一件作成
 * @returns 新規作成 User
 **/
const createUser = async (user: CreateUserParameter): Promise<User> => {
  const result = parseCreateUserParameter(user);
  if (!result.success) throw new Error("Invalid parameter");
  const { properties, ...rest } = user;

  return prisma.user.create({
    data: { ...rest, properties: { create: properties } },
    include: { properties: true },
  });
};

/**
 * User 全件取得
 * @returns User[]
 **/
const getUsers = async (param: GetUsersParameter): Promise<User[]> => {
  const result = parseGetUsersParameter(param);
  if (!result.success) throw new Error("Invalid parameter");
  return prisma.user.findMany({
    where: {
      name: { contains: param.name },
      age: { gte: param.minAge, lte: param.maxAge },
    },
    include: { properties: true },
  });
};

const getUser = async (param: GetUserParameter): Promise<User> => {
  const result = parseGetUserParameter(param);
  if (!result.success) throw new Error("Invalid parameter");
  const id = result.output;
  const user = await prisma.user.findUnique({
    where: { id },
    include: { properties: true },
  });
  if (!user) throw new Error("User not found");
  return user;
};

const updateUser = async (user: User): Promise<User> => {
  const result = parseUser(user);
  if (!result.success) throw new Error("Invalid parameter");
  const { properties, ...rest } = user;
  return prisma.user.update({
    where: { id: user.id },
    data: { ...rest, properties: { connect: properties } },
    include: { properties: true },
  });
};

const deleteUser = async (param: DeleteUserParameter): Promise<User> => {
  const result = parseDeleteUserParameter(param);
  if (!result.success) throw new Error("Invalid parameter");
  const id = result.output;
  const user = await prisma.user.delete({
    where: { id },
    include: { properties: true },
  });
  if (!user) throw new Error("User not found");
  return user;
};

export { createUser, getUsers, getUser, updateUser, deleteUser };

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  describe.skip("repositories/User", () => {});
}
