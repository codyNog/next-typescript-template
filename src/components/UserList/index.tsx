import Link from "next/link";
import { GetUsersParameter, User } from "~/domain/entities/User";
import { getUsers } from "~/domain/repositories/User";
import { GetUsersParameterForm } from "~/components/GetUsersParameterForm";

type Props = {
  param: GetUsersParameter;
  onChangeParam: (param: GetUsersParameter) => void;
};

const getUsersAction = async (param: GetUsersParameter): Promise<User[]> => {
  "use server";
  return await getUsers(param);
};

const Item = ({ user }: { user: User }): JSX.Element => {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </div>
  );
};

export const UserList = async ({
  param,
  onChangeParam,
}: Props): Promise<JSX.Element> => {
  const users = await getUsersAction(param);
  return (
    <div>
      <GetUsersParameterForm action={onChangeParam} param={param} />
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <Item user={user} />
        </Link>
      ))}
    </div>
  );
};
