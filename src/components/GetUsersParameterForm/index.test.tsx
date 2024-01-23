import { composeStories } from "@storybook/react";
import { render } from "~/libs/test";
import * as Story from "~/components/GetUsersParameterForm/index.stories";

describe("GetUsersParameterForm", () => {
  const { FirstStory } = composeStories(Story);
  it("正常にレンダリングされる", () => {
    const { container } = render(<FirstStory />);
    expect(container).toMatchSnapshot();
  });
});
