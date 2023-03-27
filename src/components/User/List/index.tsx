import { GetUsersParameter, User } from "~/types/User";
import { useUserList } from "~/components/User/List/hooks";

/**
 * Item の props
 **/
type ItemProps = { user: User };
/**
 * @prop user - 表示する User
 * @return User 一件を表示する
 **/
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
/**
 * @remark suspendable
 * @prop parameter - 渡されたパラメータに従って User[] が取得される
 * @return User の配列を取得、表示する
 **/
export const UserList = ({ parameter }: Props): JSX.Element => {
  const { users } = useUserList(parameter);

  return (
    <>
      {users!.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </>
  );
};
