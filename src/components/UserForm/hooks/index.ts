import { Providers } from "~/store/Providers";
import { useForm } from "react-hook-form";
import { User, userSchema } from "~/domain/entities/User";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useCallback } from "react";

type Args = {
  action: (value: User) => void;
  defaultValues?: User;
};

export const useUserForm = ({ action, defaultValues }: Args) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    resolver: valibotResolver(userSchema),
    defaultValues: defaultValues || {
      id: "5ae864f6-4fad-4f64-98b6-54048c3b9c83",
      name: "",
      email: "",
      age: 0,
      properties: [],
    },
  });
  const onSubmit = useCallback(async () => {
    handleSubmit(action)();
  }, [handleSubmit, action]);

  return { register, errors, onSubmit };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  const { renderHook } = await import("@testing-library/react");

  describe("useUserForm", () => {
    it("初期状態", async () => {
      const { result } = renderHook(() => useUserForm({ action: () => {} }), {
        wrapper: Providers,
      });
      expect(result.current).toStrictEqual({});
    });
  });
}
