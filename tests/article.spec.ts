// e2e/article.spec.ts
import { test, expect } from "@playwright/test";

test("create article flow", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // (sign-in step here if required)
  await page.getByRole("button", { name: "New Article" }).click();
  await page.getByLabel("Title").fill("My First Post");
  await page.getByLabel("Content").fill("Hello world");
  await page.getByRole("button", { name: "Publish" }).click();
  await expect(page.getByText("My First Post")).toBeVisible();
});