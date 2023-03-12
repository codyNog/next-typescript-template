import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GetUsersParameterForm as Component } from "~/components/User/GetUsersParameterForm";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "GetUsersParameterForm",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nameInput = canvas.getByLabelText("name", { selector: "input" });
  await userEvent.type(nameInput, "foo", {
    delay: 100,
  });
};
