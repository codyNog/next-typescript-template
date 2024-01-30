import { getUser, updateUser } from "~/domain/repositories/User";
import { UserForm } from "~/components/UserForm";
import { GetUserParameter } from "~/domain/entities/User";
import { redirect } from "next/navigation";

type Props = {
  param: GetUserParameter;
  redirectPath: string;
};

const getUserAction = async (param: GetUserParameter) => {
  "use server";
  return await getUser(param);
};

export const UpdateUserForm = async ({
  param,
  redirectPath,
}: Props): Promise<JSX.Element> => {
  const user = await getUserAction(param);

  return (
    <UserForm
      user={user}
      action={async (user) => {
        "use server";
        await updateUser(user);
        redirect(redirectPath);
      }}
    />
  );
};
