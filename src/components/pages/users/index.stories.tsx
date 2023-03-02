import { ComponentMeta } from "@storybook/react";
import { UsersPage as Component } from ".";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "UsersPage",
  component: Component,
} as ComponentMeta<typeof Component>;
