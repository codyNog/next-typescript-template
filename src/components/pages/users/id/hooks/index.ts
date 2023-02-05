import { updateUser } from "~/api/User";

export const useUserPage = () => {
  const onSubmit = updateUser;

  return { onSubmit };
};
