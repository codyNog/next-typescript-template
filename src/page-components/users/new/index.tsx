import { UserForm } from "~/components/UserForm";
import { usersNewAction } from "~/page-components/users/new/action";

const UserNewPage = async (): Promise<JSX.Element> => {
  return <UserForm action={usersNewAction} />;
};

export default UserNewPage;
