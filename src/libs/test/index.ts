import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";
import { Providers } from "~/store/Providers";

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
