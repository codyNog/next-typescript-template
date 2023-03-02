import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RootPage as Component } from ".";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "RootPage",
  component: Component,
} as ComponentMeta<typeof Component>;

export const Page = Component.bind({});
