import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { DATABASE_URL } from "../constants/env";

export const db = drizzle(postgres(DATABASE_URL), { schema });
