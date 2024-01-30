import { createUser } from "~/domain/repositories/User";
import { UserForm } from "~/components/UserForm";
import { redirect } from "next/navigation";

type Props = {
  redirectPath: string;
};

export const CreateUserForm = async ({
  redirectPath,
}: Props): Promise<JSX.Element> => {
  return (
    <UserForm
      action={async (user) => {
        "use server";
        const { id: _, ...rest } = user;
        await createUser(rest);
        redirect(redirectPath);
      }}
    />
  );
};
