"use server";
import { CreateUserParameter } from "~/domain/entities/User";
import { createUser } from "~/domain/repositories/User";

export const usersNewAction = async (
  data: CreateUserParameter
): Promise<void> => {
  "use server";
  createUser(data);
};
