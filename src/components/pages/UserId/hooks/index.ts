import { updateUser } from "~/api/User";

export const useUserIdPage = () => {
  const onSubmit = updateUser;

  return { onSubmit };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  // const { renderHook } = await import("@testing-library/react");

  describe("useUserIdPage", () => {
    it("初期状態", async () => {
      // const { result } = renderHook(() => useUserIdPage());
    });
  });
}
