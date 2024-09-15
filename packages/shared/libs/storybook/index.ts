import { within } from "@storybook/test";

export const getCanvas = (canvasElement: HTMLElement) => {
  // @ts-ignore
  return within(canvasElement.parentElement);
};
