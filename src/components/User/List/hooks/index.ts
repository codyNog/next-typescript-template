import { useUser } from "~/store/User";

/**
 * UserList の Custom Hooks
 **/
export const useUserList = () => {
  const { getUsers } = useUser();

  return { getUsers };
};
