import { useRouter } from "next/router";

export const useIndexPage = () => {
  const { hoge } = useRouter().query;

  return { hoge };
};
