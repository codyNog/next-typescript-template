import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserList as Component } from "~/components/User/List";

export default {
  title: "UserList",
  component: Component,
} as ComponentMeta<typeof Component>;

const Story: ComponentStory<typeof Component> = (args) => (
  <Component {...args} parameter={{ name: "" }} />
);

export const Template = Story.bind({});
