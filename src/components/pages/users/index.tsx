import { Suspense } from "react";
import { UserList } from "~/components/organisms/User/List";

export const UsersPage = (): JSX.Element => {
  return (
    <Suspense>
      <UserList />
    </Suspense>
  );
};
