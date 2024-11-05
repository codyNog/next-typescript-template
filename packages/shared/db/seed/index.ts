import { seedTodos } from "./todos";

async function main() {
  try {
    await seedTodos();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
  process.exit(0);
}

main();
