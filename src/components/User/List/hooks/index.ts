import { useUser } from "~/store/User";

export const useUserList = () => {
  const { getUsers } = useUser();

  return { getUsers };
};
