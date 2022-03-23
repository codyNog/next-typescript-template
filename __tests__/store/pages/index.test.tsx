import { renderHook } from "@testing-library/react-hooks";
import { NextRouter } from "next/router";
import { useIndexPage } from "~/store/components/pages";
import { RouterContext } from "next/dist/shared/lib/router-context";

const mockedRouter: NextRouter = {
  route: "",
  pathname: "",
  query: {
    hoge: "hoge",
  },
  asPath: "",
  push: async () => true,
  replace: async () => true,
  reload: () => null,
  back: () => null,
  prefetch: async () => undefined,
  beforePopState: () => null,
  events: {
    on: () => null,
    off: () => null,
    emit: () => null,
  },
  basePath: "",
  isLocaleDomain: false,
  isFallback: false,
  isReady: false,
  isPreview: false,
};

const wrapper: React.ComponentType = ({ children }) => {
  return (
    <RouterContext.Provider value={mockedRouter}>
      {children}
    </RouterContext.Provider>
  );
};

describe("useIndexPage", () => {
  it("初期値", async () => {
    const { result } = renderHook(() => useIndexPage(), {
      wrapper,
    });
    expect(result.current.hoge).toBe("hoge");
  });
});
