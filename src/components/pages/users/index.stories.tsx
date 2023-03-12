import { ComponentMeta } from "@storybook/react";
import { UsersPage as Component } from ".";

export default {
  title: "Page/Users",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Page = Component.bind({});
