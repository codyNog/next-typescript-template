export const useRootPage = () => {
  return {};
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  const { renderHook } = await import("@testing-library/react");

  describe("useRootPage", () => {
    it("初期状態", async () => {
      const { result } = renderHook(() => useRootPage());
      expect(result.current).toEqual({});
    });
  });
}
