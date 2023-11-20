/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  define: { "import.meta.vitest": false },
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts,tsx}"],
    setupFiles: "./vitest.setup.ts",
  },
});
