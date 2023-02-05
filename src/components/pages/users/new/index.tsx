import { Suspense } from "react";
import { UserForm } from "~/components/organisms/User/Form";
import { useUserNewPage } from "~/components/pages/users/new/hooks";

export const UserNewPage = (): JSX.Element => {
  const { onSubmit } = useUserNewPage();

  return (
    <Suspense>
      <UserForm onSubmit={onSubmit} />
    </Suspense>
  );
};
