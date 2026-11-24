// import {test,expect} from '@playwright/test'
import {test , expect}  from '../Fixtures/fixture'
// import {RegistrationPage} from '../Pages/RegistrationPage'

 test ("Verify Registration page", async ({registrationPage})=>{

 const email = `Pujan${Date.now()}@example.com`;


 
/*await page.getByText("Register").click()
await page.getByLabel("First name:").fill("Pujan");
await page.getByLabel("Last name:").fill("Bhatt");
await page.getByLabel("Email:").fill("Test199910@mail.com");
await page.getByLabel("Password:").fill("Sdet@2027");
await page.getByLabel("Confirm password:").fill("Sdet@2027");
//if the logout button is present the test is marked as passed otherwise fail
await expect(page.getByText("Log out")).toBeVisible(); */
// await page.goto('/');
// 
//No need to create the object of the page class as we have already created it in the fixture file and passed it to the test function as a parameter
// const registrationPage = new RegistrationPage(page);
await registrationPage.nagivateToRegistrationPage();
await registrationPage.enterRegistrationcredentials("Pujan","Bhatt",email,"Sdet@2027","Sdet@2027");
await registrationPage.verifyLogoutButtonvisible();

});