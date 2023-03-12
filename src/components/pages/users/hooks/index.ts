import { useCallback, useState } from "react";
import { GetUsersParameter } from "~/types/User";

const defaultValues: GetUsersParameter = { name: "" };

export const useUsersPage = () => {
  const [parameter, setParameter] = useState<GetUsersParameter>(defaultValues);

  const onSubmit = useCallback(
    (parameter: GetUsersParameter) => {
      setParameter(parameter);
    },
    [setParameter],
  );

  return { parameter, onSubmit };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  const { renderHook } = await import("@testing-library/react");

  describe("useUsersPage", () => {
    it("初期状態", async () => {
      const { result } = renderHook(() => useUsersPage());
      expect(result.current.parameter).toStrictEqual<GetUsersParameter>(
        defaultValues,
      );
    });
  });
}
