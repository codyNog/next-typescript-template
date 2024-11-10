import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { setStaticParamsLocale } from "next-international/server";
import { getCanvas } from "shared/libs/storybook";
import { TodoDetail as Component } from ".";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Ja: Story = {
  args: {},
  render: (args) => {
    setStaticParamsLocale("ja");
    return <Component {...args} />;
  },
};

export const En: Story = {
  args: {},
  render: (args) => {
    setStaticParamsLocale("en");
    return <Component {...args} />;
  },
};

export const Behavior: Story = {
  args: {},
  render: (args) => {
    setStaticParamsLocale("ja");
    return <Component {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = getCanvas(canvasElement);
    expect(canvas).toBeTruthy();
  },
};
