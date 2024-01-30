import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { redirect } from "next/navigation";
import { User } from "~/domain/entities/User";
import { deleteUser, getUser } from "~/domain/repositories/User";

type Props = {
  userId: string;
  href: Url;
  redirectPath: string;
};

const getUserAction = async (userId: string): Promise<User> => {
  "use server";
  return await getUser(userId);
};

export const UserDetail = async ({
  userId,
  href,
  redirectPath,
}: Props): Promise<JSX.Element> => {
  const user = await getUserAction(userId);
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.email}</div>
      <Link href={href}>更新</Link>
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
