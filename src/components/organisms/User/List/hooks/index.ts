import { useState } from "react";
import { GetUsersParameter } from "~/types/User";

export const useUserList = () => {
  const [parameter, setParameter] = useState<GetUsersParameter>({ name: "" });

  return { parameter, setParameter };
};
