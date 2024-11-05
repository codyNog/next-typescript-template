import type { Config } from "drizzle-kit";
import { DATABASE_URL } from "./constants/env";

const config: Config = {
  schema: "./db/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
};

export default config;
