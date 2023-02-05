import { Suspense } from "react";
import { UserForm } from "~/components/organisms/User/Form";
import { useUserPage } from "~/components/pages/users/id/hooks";

export const UserPage = (): JSX.Element => {
  const { onSubmit } = useUserPage();

  return (
    <Suspense>
      <UserForm onSubmit={onSubmit} />
    </Suspense>
  );
};
