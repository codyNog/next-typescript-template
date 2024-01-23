import { redirect } from "next/navigation";
import { UserList } from "~/components/UserList";
import { GetUsersParameter } from "~/domain/entities/User";

type SearchParams = {
  [key in keyof GetUsersParameter]: string | string[] | undefined;
};

const param = (searchParams: SearchParams): GetUsersParameter => ({
  name: searchParams.name as string | undefined,
  maxAge:
    searchParams.maxAge === undefined ? undefined : Number(searchParams.maxAge),
  minAge:
    searchParams.minAge === undefined ? undefined : Number(searchParams.minAge),
});

const onChangeParam = async (param: GetUsersParameter) => {
  "use server";
  const queryParams = new URLSearchParams(param as any);
  const path = `/users?${queryParams.toString()}`;
  redirect(path);
};

const UsersPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<JSX.Element> => {
  return <UserList param={param(searchParams)} onChangeParam={onChangeParam} />;
};

export default UsersPage;
