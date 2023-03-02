export const useUsersPage = () => {
  return {};
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  // const { renderHook } = await import("@testing-library/react");

  describe("useUsersPage", () => {
    it("初期状態", async () => {
      //const { result } = renderHook(() => useUsersPage());
    });
  });
}
