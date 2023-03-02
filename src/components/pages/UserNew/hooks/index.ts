import { createUser } from "~/api/User";

export const useUserNewPage = () => {
  const onSubmit = createUser;

  return { onSubmit };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  describe("useUserNewPage", () => {
    it("初期状態", async () => {});
  });
}
