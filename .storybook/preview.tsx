import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        segments: [["locale", "ja"]],
      },
      router: {
        locale: "en",
        locales: ["en"],
        defaultLocale: "en",
      },
    },
    test: {
      // to avoid zod resolver error
      dangerouslyIgnoreUnhandledErrors: true,
    },
  },
};

export default preview;
