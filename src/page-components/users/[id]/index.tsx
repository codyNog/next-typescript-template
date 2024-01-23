import { UserDetail } from "~/components/UserDetail";
import { GetUserParameter } from "~/domain/entities/User";

type SearchParams = {
  id: string | string[] | undefined;
};

const UsersUserIdPage = async ({
  params,
}: {
  params: SearchParams;
}): Promise<JSX.Element> => {
  const param: GetUserParameter = params.id as string;
  if (!param) return <div>Not Found</div>;
  return <UserDetail userId={param} redirectPath={"/users"} />;
};

export default UsersUserIdPage;
