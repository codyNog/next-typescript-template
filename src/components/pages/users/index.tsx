import { Suspense } from "react";
import { GetUsersParameterForm } from "~/components/User/GetUsersParameterForm";
import { UserList } from "~/components/User/List";
import { useUsersPage } from "~/components/pages/Users/hooks";

/**
 * User の一覧を表示するページ
 **/
export const UsersPage = (): JSX.Element => {
  const { parameter, onSubmit } = useUsersPage();

  return (
    <div>
      <GetUsersParameterForm onSubmit={onSubmit} />
      <Suspense>
        <UserList parameter={parameter} />
      </Suspense>
    </div>
  );
};
