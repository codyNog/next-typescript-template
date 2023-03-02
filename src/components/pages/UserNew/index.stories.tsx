import { ComponentMeta } from "@storybook/react";
import { UserNewPage as Component } from ".";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "UserNewPage",
  component: Component,
} as ComponentMeta<typeof Component>;
