import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

type Props = {
  children: React.ReactNode;
};

/**
 * Global な Provider を集約した Wrapper
 **/
export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
