import { CreateUserForm } from "~/components/CreateUserForm";

const UserNewPage = async (): Promise<JSX.Element> => {
  return <CreateUserForm redirectPath={"/users"} />;
};

export default UserNewPage;
