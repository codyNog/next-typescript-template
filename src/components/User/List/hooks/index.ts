import { useUser } from "~/store/User";
import { GetUsersParameter } from "~/types/User";

/**
 * UserList の Custom Hooks
 **/
export const useUserList = (parameter: GetUsersParameter) => {
  const { getUsers } = useUser();
  const users = getUsers(parameter);

  return { users };
};
