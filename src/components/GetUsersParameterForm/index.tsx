"use client";

import { GetUsersParameter } from "~/domain/entities/User";
import { useGetUsersParameterForm } from "~/components/GetUsersParameterForm/hooks";

type Props = {
  action: (param: GetUsersParameter) => void;
  param: GetUsersParameter;
};

export const GetUsersParameterForm = ({
  action,
  param,
}: Props): JSX.Element => {
  const { register, onSubmit } = useGetUsersParameterForm({ action, param });
  return (
    <form action={onSubmit}>
      <input type={"text"} {...register("name")} />
      <input type={"number"} {...register("minAge")} />
      <input type={"number"} {...register("maxAge")} />
      <button type={"submit"}>検索</button>
    </form>
  );
};
