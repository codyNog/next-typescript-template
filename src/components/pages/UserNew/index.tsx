import { Suspense } from "react";
import { UserForm } from "~/components/User/Form";
import { useUserNewPage } from "~/components/pages/UserNew/hooks";

/**
 * User 一件を新規作成するページ
 **/
export const UserNewPage = (): JSX.Element => {
  const { onSubmit } = useUserNewPage();

  return (
    <Suspense>
      <UserForm onSubmit={onSubmit} />
    </Suspense>
  );
};
