/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  define: { "import.meta.vitest": false },
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts,tsx}"],
    setupFiles: "./vitest.setup.ts",
  },
  resolve: { alias: { "~": fileURLToPath(new URL("/src", import.meta.url)) } },
});
