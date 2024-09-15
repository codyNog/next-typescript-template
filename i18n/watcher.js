import { spawn } from "node:child_process";
import { watch } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Get the current directory of the current file (watcher.js)
const currentDir = dirname(fileURLToPath(import.meta.url));

// Target file path to watch (relative path from the project root)
const TARGET_FILE = join(currentDir, "index.csv");

// Path to the script to run (relative path from the project root)
const SCRIPT_TO_RUN = join(currentDir, "index.js");

console.log(`Target file to watch: ${TARGET_FILE}`);
console.log(`Script to run: ${SCRIPT_TO_RUN}`);

// Start watching for file changes
watch(TARGET_FILE, (eventType, filename) => {
  if (eventType === "change") {
    console.log(`${filename} has been changed. Running the script...`);

    // Execute the script using Bun
    const process = spawn("bun", [SCRIPT_TO_RUN], {
      stdio: "inherit", // Inherit the standard input/output of the parent process
    });

    process.on("close", (code) => {
      console.log(`Script has finished. Exit code: ${code}`);
    });
  }
});

console.log("File watcher server has started. Press Ctrl+C to exit.");
