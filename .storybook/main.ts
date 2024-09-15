import type { StorybookConfig } from "@storybook/nextjs";

import { dirname, join } from "node:path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// biome-ignore lint:
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../**/*.stories.tsx", "../**/*.mdx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    "storybook-css-modules",
  ],
  docs: {
    autodocs: "tag",
  },
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  env: (config) => ({
    ...config,
    NODE_ENV: "storybook",
    IS_STORYBOOK: "true",
  }),
};
export default config;
