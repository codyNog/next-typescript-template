import { storiesOf } from "@storybook/react";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

type ComponentType = "atoms" | "molecules" | "organisms";

export const addComponent = (
  componentType: ComponentType,
  component: StoryFnReactReturnType
) => {
  storiesOf("components", module).add(componentType, () => component);
};
