import { useForm } from "react-hook-form";
import { GetUsersParameter } from "~/types/User";

const defaultValues: GetUsersParameter = { name: "" };

/**
 * GetUsersParameterForm の Custom Hooks
 **/
export const useGetUsersParameterForm = () => {
  const { register, handleSubmit, watch } = useForm<GetUsersParameter>({
    defaultValues,
  });

  const parameter = watch();

  return { register, handleSubmit, parameter };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  const { renderHook } = await import("@testing-library/react");

  describe("useGetUsersParameterForm", () => {
    it("初期状態", async () => {
      const { result } = renderHook(() => useGetUsersParameterForm());

      expect(result.current.parameter).toStrictEqual<GetUsersParameter>(
        defaultValues,
      );
    });
  });
}
