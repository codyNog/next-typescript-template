"use client";
import { CreateUserParameter } from "~/domain/entities/User";
import { useUserForm } from "~/components/UserForm/hooks";

type Props = {
  action: (value: CreateUserParameter) => void;
};

export const UserForm = ({ action }: Props): JSX.Element => {
  const { register, errors, onSubmit } = useUserForm({ action });

  return (
    <form action={onSubmit}>
      <label>
        name
        <input type={"text"} {...register("name")} />
      </label>
      <label>
        email
        <input type={"text"} {...register("email")} />
      </label>
      {errors.email && <div>{errors.email.message}</div>}
      <label>
        age
        <input type={"number"} {...register("age")} />
      </label>
      <button type={"submit"}>送信</button>
    </form>
  );
};
