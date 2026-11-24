import {expect,Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';

class RegistrationPage extends BasePage{
    private readonly registerLink:Locator;
    private readonly genderbutton: Locator;
    private readonly firstnameInput :Locator;
    private readonly lastnameInput :Locator;
    private readonly emailInput :Locator;
    private readonly passwordInput :Locator;
    private readonly confirmpasswordInput :Locator;
    private readonly registerbutton : Locator;
    private readonly logoutbutton : Locator;
    constructor(page:Page){
        super(page)
        this.registerLink = page.getByText("Register");
        this.genderbutton = page.getByLabel("Male" , {exact: true})
        this.firstnameInput = page.getByLabel("First name:");
        this.lastnameInput = page.getByLabel("Last name:");
        this.emailInput = page.getByLabel("Email:");
        this.passwordInput = page.getByLabel("Password:", {exact:true})	// Matches only Password
        // this.passwordInput = page.locator("input[id='Password']");
        this.confirmpasswordInput = page.getByLabel("Confirm password:", {exact:true}) //Matches only Confirm password
        // this.confirmpasswordInput = page.locator("input[id='ConfirmPassword']");
        this.registerbutton = page.getByRole("button" ,{name:'Register'});
        this.logoutbutton = page.getByText("Log out");
    }
async nagivateToRegistrationPage(){
        await this.registerLink.click();
}
async enterRegistrationcredentials(Firstname:string,Lastname:string,Email:string,Password:string,Confirmpassword:string){
        /* await this.genderbutton.check();
        await this.firstnameInput.fill(Firstname);
        await this.lastnameInput.fill(Lastname);
        await this.emailInput.fill(Email);
        await this.passwordInput.fill(Password);
        await this.confirmpasswordInput.fill(Confirmpassword);
        await this.registerbutton.click(); */
        await this.clickElement(this.genderbutton);
        await this.enterText(this.firstnameInput,Firstname);
        await this.enterText(this.lastnameInput,Lastname);
        await this.enterText(this.emailInput,Email);
        await this.enterText(this.passwordInput,Password);
        await this.enterText(this.confirmpasswordInput,Confirmpassword);
        await this.clickElement(this.registerbutton);
}
async verifyLogoutButtonvisible(){
    await expect(this.logoutbutton).toBeVisible();
}
}
export{RegistrationPage}