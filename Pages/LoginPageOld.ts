import { expect, Locator,Page } from "@playwright/test";
class LoginPageOld {

    private readonly loginLink:Locator;
    private readonly emailInput:Locator
    private readonly passwordInput:Locator
    private readonly loginButton:Locator;
    private readonly logoutButton:Locator;
    constructor(page:Page){
        this.loginLink=page.getByText("Log in");
        this.emailInput=page.getByLabel("Email:");
        this.passwordInput=page.getByLabel("Password:");
        this.loginButton=page.getByRole("button",{name:'Log in'});
        this.logoutButton=page.getByText("Log out");
    }
async navigateToLoginPageOld(){

        await this.loginLink.click()
}
async enterLoginCredentials(email:string,password:string){
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
 
}
async verifyLogoutButtonIsVisible(){

    await expect(this.logoutButton).toBeVisible();
}
}
export {LoginPageOld}