import { UpdateUserForm } from "~/components/UpdateUserForm";
import { GetUserParameter } from "~/domain/entities/User";

type SearchParams = {
  id: string | string[] | undefined;
};

const UsersIdUpdatePage = async ({
  params,
}: {
  params: SearchParams;
}): Promise<JSX.Element> => {
  const param: GetUserParameter = params.id as string;
  if (!param) return <div>Not Found</div>;
  return <UpdateUserForm param={param} redirectPath={"/users"} />;
};

export default UsersIdUpdatePage;
