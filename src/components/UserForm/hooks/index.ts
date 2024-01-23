import { Providers } from "~/store/Providers";
import { useForm } from "react-hook-form";
import {
  CreateUserParameter,
  createUserParameterSchema,
} from "~/domain/entities/User";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useCallback } from "react";

type Args = {
  action: (value: CreateUserParameter) => void;
  defaultValues?: CreateUserParameter;
};

export const useUserForm = ({ action, defaultValues }: Args) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateUserParameter>({
    resolver: valibotResolver(createUserParameterSchema),
    defaultValues: defaultValues || {
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
