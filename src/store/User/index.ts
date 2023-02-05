import { atom, useRecoilState } from "recoil";
import { GetUsersParameter, User } from "~/types/User";
import useSWR from "swr";
import {
  createUser as create,
  getUsers as getMany,
  updateUser as update,
} from "~/api/User";

const getUsersParameterAtom = atom<GetUsersParameter>({
  key: "getUUsersParameter",
  default: { name: "" },
});

export const useUser = () => {
  const [getUsersParameter, setGetUsersParameter] = useRecoilState(
    getUsersParameterAtom,
  );

  const createUser = create;

  const getUsers = (parameter: GetUsersParameter) =>
    useSWR<User[]>("users", () => getMany(parameter), {
      suspense: true,
    });

  const updateUser = update;

  return {
    getUsersParameter,
    setGetUsersParameter,
    createUser,
    getUsers,
    updateUser,
  };
};
