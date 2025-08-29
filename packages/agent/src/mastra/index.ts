import { createLogger } from "@mastra/core/logger";
import { Mastra } from "@mastra/core/mastra";

import { browserAgent, weatherAgent } from "./agents";

export const mastra = new Mastra({
  agents: { weatherAgent, browserAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
