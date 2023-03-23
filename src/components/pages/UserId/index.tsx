import { Suspense } from "react";
import { UserForm } from "~/components/User/Form";
import { useUserIdPage } from "~/components/pages/UserId/hooks";

/**
 * User 一件を表示、編集するページ
 **/
export const UserIdPage = (): JSX.Element => {
  const { onSubmit } = useUserIdPage();
  return (
    <Suspense>
      <UserForm onSubmit={onSubmit} />
    </Suspense>
  );
};
