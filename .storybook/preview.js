import { withScreenshot } from 'storycap';

export const decorators = [
  withScreenshot, // Registration the decorator is required
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};