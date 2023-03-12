import { test, expect } from "@playwright/test";

const URL = process.env.URL || "http://localhost:3000/";
console.log(URL);

test("has title", async ({ page }) => {
  await page.goto(URL);

  await expect(page).toHaveTitle("Next App");
});
