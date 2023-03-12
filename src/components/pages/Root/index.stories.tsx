import { ComponentMeta } from "@storybook/react";
import { RootPage as Component } from ".";

export default {
  title: "Page/Root",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Page = Component.bind({});
