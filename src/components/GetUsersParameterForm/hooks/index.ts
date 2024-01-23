import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { GetUsersParameter } from "~/domain/entities/User";
import { Providers } from "~/store/Providers";

type Args = {
  action: (param: GetUsersParameter) => void;
  param: GetUsersParameter;
};

export const useGetUsersParameterForm = ({ action, param }: Args) => {
  const { register, handleSubmit } = useForm<GetUsersParameter>({
    defaultValues: param,
  });

  const onSubmit = useCallback(() => {
    handleSubmit(async (data) => {
      action(data);
    })();
  }, [handleSubmit, action]);

  return { register, onSubmit };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  const { renderHook } = await import("@testing-library/react");

  describe("useGetUsersParameterForm", () => {
    it("初期状態", async () => {
      const { result } = renderHook(
        () => useGetUsersParameterForm({ action: () => {}, param: {} }),
        {
          wrapper: Providers,
        }
      );
      expect(result.current).toStrictEqual({});
    });
  });
}
