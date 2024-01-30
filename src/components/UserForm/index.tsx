"use client";
import { User } from "~/domain/entities/User";
import { useUserForm } from "~/components/UserForm/hooks";

type Props = {
  action: (value: User) => void;
  user?: User;
};

export const UserForm = ({ action, user }: Props): JSX.Element => {
  const { register, errors, onSubmit } = useUserForm({
    action,
    defaultValues: user,
  });

  return (
    <form action={onSubmit}>
      <input type={"text"} placeholder="name" {...register("name")} />
      <input type={"text"} placeholder="email" {...register("email")} />
      {errors.email && <div>{errors.email.message}</div>}
      <input
        type={"number"}
        placeholder="age"
        {...register("age", { valueAsNumber: true })}
      />
      {errors.age && <div>{errors.age.message}</div>}
      <button type={"submit"}>送信</button>
    </form>
  );
};
