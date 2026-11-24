//import { test, expect } from '@playwright/test';
import { test, expect } from '../Fixtures/fixture';
test('Verify Login Functionality', async ({ loginPage }) => {

  
/*await page.getByText("Log in").click()
await page.getByLabel("Email:").fill("111Test@test.com")
await page.getByLabel("Password:").fill("111Test@test")
await page.getByRole("button",{name:'Log in'}).click()
//if the logout button is present the test is marked as passed otherwise fail
await expect(page.getByLabel("Log out")).toBeVisible();*/

//No need to create the object of the page class as we have already created it in the fixture file and passed it to the test function as a parameter
//const loginPage = new LoginPage(page);
await loginPage.navigateToLoginPage();
await loginPage.enterLoginCredentials("111Test@test.com", "111Test@test");
await loginPage.verifyLogoutButtonIsVisible();
});