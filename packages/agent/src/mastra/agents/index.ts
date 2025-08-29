import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { mcp } from "../../mcp";

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - If the location name isn’t in English, please translate it
      - If giving a location with multiple parts (e.g. "New York, NY"), use the most relevant part (e.g. "New York")
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative
      - reply in Japanese
`,
  model: google("gemini-2.5-pro-exp-03-25"),
});

export const browserAgent = new Agent({
  name: "Browser Agent",
  instructions: `
    You are a browser agent that can browse the web and answer questions.
    - reply in Japanese
  `,
  model: anthropic("claude-3-7-sonnet-20250219"),
  tools: await mcp.getTools(),
});
