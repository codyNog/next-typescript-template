import { useQuery } from "@tanstack/react-query";

export const use = <T>(
  callback: Promise<T>,
  queryKey: string[]
): T | undefined => {
  const { data } = useQuery({
    queryKey,
    queryFn: () => callback,
  });

  return data;
};
