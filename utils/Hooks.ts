import { test } from "@playwright/test";
export function registerHooks() {
    test.beforeEach(async ({ page }) => {
        console.log("Before each test hook executed");
        // Setup code before each test
        await page.goto('/');
    });
    test.afterEach(async ({ page }) => {
        console.log("After each test hook executed");
        // Teardown code after each test
        if(test.info().status!='passed'){
            await page.screenshot({ path: `screenshots/${test.info().title}.png` });
        }
    });
}