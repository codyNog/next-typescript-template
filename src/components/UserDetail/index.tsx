import { redirect } from "next/navigation";
import { User } from "~/domain/entities/User";
import { deleteUser, getUser } from "~/domain/repositories/User";

type Props = {
  userId: string;
  redirectPath: string;
};

const getUserAction = async (userId: string): Promise<User> => {
  "use server";
  return await getUser(userId);
};

export const UserDetail = async ({
  userId,
  redirectPath,
}: Props): Promise<JSX.Element> => {
  const user = await getUserAction(userId);
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <form
        action={async () => {
          "use server";
          await deleteUser(userId);
          redirect(redirectPath);
        }}
      >
        <button type={"submit"}>削除</button>
      </form>
    </div>
  );
};
