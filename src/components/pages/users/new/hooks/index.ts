import { createUser } from "~/api/User";

export const useUserNewPage = () => {
  const onSubmit = createUser;

  return { onSubmit };
};
