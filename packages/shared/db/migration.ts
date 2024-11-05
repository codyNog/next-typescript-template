import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { DATABASE_URL } from "../constants/env";

async function runMigrations() {
  const connection = postgres(DATABASE_URL, { max: 1 });
  const db = drizzle(connection);

  try {
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }

  await connection.end();
}

runMigrations();
