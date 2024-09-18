import {
  PostgreSqlContainer,
  type StartedPostgreSqlContainer,
} from "@testcontainers/postgresql";
import {
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} from "../constants/env";

export const setupTestDB = async () => {
  const container = await new PostgreSqlContainer()
    .withDatabase(DATABASE_NAME)
    .withUsername(DATABASE_USER)
    .withPassword(DATABASE_PASSWORD)
    .withExposedPorts(DATABASE_PORT)
    .start();

  return container;
};

export const teardownTestDB = async (container: StartedPostgreSqlContainer) => {
  await container.stop();
};
