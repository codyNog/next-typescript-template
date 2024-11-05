import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { DATABASE_URL } from "../constants/env";
import * as schema from "./schema";

export const db = drizzle(postgres(DATABASE_URL), { schema, logger: true });
