import { ComponentMeta } from "@storybook/react";
import { RootPage as Component } from ".";

export default {
  title: "RootPage",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Page = Component.bind({});
