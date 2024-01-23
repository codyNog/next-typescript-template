import { composeStories } from "@storybook/react";
import { render } from "~/libs/test";
import * as Story from "~/components/UserForm/index.stories";

describe("UserForm", () => {
  const { FirstStory } = composeStories(Story);
  it("正常にレンダリングされる", () => {
    const { container } = render(<FirstStory />);
    expect(container).toMatchSnapshot();
  });
});
