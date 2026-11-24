import { test, expect } from '@playwright/test';
import { LoginPageOld } from '../Pages/LoginPageOld';
test('Verify Login Functionality', async ({ page }) => {

/*await page.getByText("Log in").click()
await page.getByLabel("Email:").fill("111Test@test.com")
await page.getByLabel("Password:").fill("111Test@test")
await page.getByRole("button",{name:'Log in'}).click()
//if the logout button is present the test is marked as passed otherwise fail
await expect(page.getByLabel("Log out")).toBeVisible();*/
await page.goto('/');
const loginPage = new LoginPageOld(page);
await loginPage.navigateToLoginPageOld();
await loginPage.enterLoginCredentials("111Test@test.com", "111Test@test");
await loginPage.verifyLogoutButtonIsVisible();

await page.waitForTimeout(3000);
});