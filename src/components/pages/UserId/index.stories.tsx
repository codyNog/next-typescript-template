import { ComponentMeta } from "@storybook/react";
import { UserIdPage as Component } from ".";

export default {
  title: "Page/UserId",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Page = Component.bind({});
