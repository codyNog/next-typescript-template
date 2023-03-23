import { GetUsersParameter, User } from "~/types/User";

/**
 * User 一件作成
 * @returns 新規作成 User
 **/
const createUser = async (user: User): Promise<User> => {
  return user;
};
/**
 * User 一覧検索
 * @returns User[]
 **/
const getUsers = async (parameter: GetUsersParameter): Promise<User[]> => {
  console.log(parameter);
  return [{ id: "foo", name: "bar", age: 20 }];
};
/**
 * User 一件更新
 * @returns 更新 User
 **/
const updateUser = async (user: User): Promise<User> => {
  return user;
};

export { createUser, getUsers, updateUser };
