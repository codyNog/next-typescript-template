import { Suspense } from "react";
import { GetUsersParameter, User } from "~/types/User";
import { useForm } from "react-hook-form";
import { useUserList } from "~/components/organisms/User/List/hooks";
import { useUser } from "~/store/User";

type ItemProps = { user: User };

const Item = ({ user }: ItemProps) => {
  return (
    <div>
      <div>{user.name}</div>
    </div>
  );
};

type FormProps = { onSubmit: (parameter: GetUsersParameter) => void };

const GetUsersParameterForm = ({ onSubmit }: FormProps) => {
  const { register, handleSubmit } = useForm<GetUsersParameter>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input {...register("maxAge")} />
    </form>
  );
};

const Users = ({ parameter }: { parameter: GetUsersParameter }) => {
  const { getUsers } = useUser();
  const { data: users } = getUsers(parameter);

  return (
    <>
      {users!.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </>
  );
};

export const UserList = (): JSX.Element => {
  const { parameter, setParameter } = useUserList();

  return (
    <div>
      <GetUsersParameterForm onSubmit={setParameter} />
      <Suspense>
        <Users parameter={parameter} />
      </Suspense>
    </div>
  );
};
