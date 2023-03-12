import React from "react";
import { withScreenshot } from "storycap";
import { Providers } from "../src/store/Providers";

const withProviders = (Story) => (
  <Providers>
    <Story />
  </Providers>
);

export const decorators = [
  withScreenshot, // Registration the decorator is required
  withProviders,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
