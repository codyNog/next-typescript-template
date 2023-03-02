import { useForm } from "react-hook-form";
import { User } from "~/types/User";

const defaultValues: User = {
  id: "",
  name: "",
  age: 0,
};

export const useUserForm = () => {
  const { register, handleSubmit, watch } = useForm<User>({ defaultValues });

  const user = watch();

  return { register, handleSubmit, user };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  const { renderHook } = await import("@testing-library/react");

  describe("useHoge", () => {
    it("初期状態", async () => {
      const { result } = renderHook(() => useUserForm());

      expect(result.current.user).toStrictEqual<User>(defaultValues);
    });
  });
}
