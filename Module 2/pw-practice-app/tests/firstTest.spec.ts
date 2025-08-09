import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe.only('suite1', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("navigation to form layouts", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("navigation to datepicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});