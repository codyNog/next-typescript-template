import { GetUsersParameter, User } from "~/types/User";
import { useUserList } from "~/components/User/List/hooks";

type ItemProps = { user: User };

const Item = ({ user }: ItemProps) => {
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </div>
  );
};

type Props = { parameter: GetUsersParameter };

export const UserList = ({ parameter }: Props): JSX.Element => {
  const { getUsers } = useUserList();
  const users = getUsers(parameter);

  return (
    <>
      {users!.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </>
  );
};
