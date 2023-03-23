import { atom, useRecoilState } from "recoil";
import { GetUsersParameter, User } from "~/types/User";

import {
  createUser as create,
  getUsers as getMany,
  updateUser as update,
} from "~/api/User";
import { use } from "~/libs/hooks";

/**
 * User 一覧取得の Global なパラメータ
 **/
const getUsersParameterAtom = atom<GetUsersParameter>({
  key: "getUUsersParameter",
  default: { name: "" },
});

/**
 * User に関わる Store を集約した Custom Hooks
 **/
export const useUser = () => {
  const [getUsersParameter, setGetUsersParameter] = useRecoilState(
    getUsersParameterAtom,
  );

  const createUser = create;

  const getUsers = (parameter: GetUsersParameter) =>
    use<User[]>(getMany(parameter), ["getUsers", String(parameter)]);

  const updateUser = update;

  return {
    getUsersParameter,
    setGetUsersParameter,
    createUser,
    getUsers,
    updateUser,
  };
};
