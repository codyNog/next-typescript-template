import { GetUsersParameter, User } from "~/types/User";

const createUser = async (user: User): Promise<User> => {
  return user;
};

const getUsers = async (parameter: GetUsersParameter): Promise<User[]> => {
  console.log(parameter);
  return [{ id: "foo", name: "bar", age: 20 }];
};

const updateUser = async (user: User): Promise<User> => {
  return user;
};

export { createUser, getUsers, updateUser };
