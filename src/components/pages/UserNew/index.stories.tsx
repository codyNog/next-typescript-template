import { ComponentMeta } from "@storybook/react";
import { UserNewPage as Component } from ".";

export default {
  title: "Page/UserNew",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Page = Component.bind({});
