import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Component> = {
  title: 'RootPage',
  component: Component,
}

export default meta;

type Story = StoryObj<typeof Component>;

export const FirstStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByTestId('an-element'), 'example-value');
  },
}
