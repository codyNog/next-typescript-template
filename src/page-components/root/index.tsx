import { getUsers } from "~/domain/repositories/User";

const RootPage = async (): Promise<JSX.Element> => {
  const users = await getUsers();
  console.log(users);
  return <div>RootPage</div>; // cspell-disable-line
};

export default RootPage;
