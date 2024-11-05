import postgres from "postgres";
import { DATABASE_URL } from "../constants/env";

const MAX_RETRIES = 30;
const RETRY_INTERVAL = 1000; // 1 second

async function waitForDatabase() {
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      const sql = postgres(DATABASE_URL);
      await sql`SELECT 1`;
      console.log("Database is ready!");
      await sql.end();
      process.exit(0);
      // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    } catch (error) {
      console.log(`Waiting for database... (${retries + 1}/${MAX_RETRIES})`);
      retries++;
      await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
    }
  }

  console.error("Failed to connect to database");
  process.exit(1);
}

waitForDatabase();
