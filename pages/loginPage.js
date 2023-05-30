exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.email_textbox = page.locator("input[name='email']")
        this.password_textbox = page.locator("input[name='password']")
        this.login_button = page.locator("input[value='Login']")
     }

    //login to the application
    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    //enter emailaddress in the login page
    async enterEmail(emailaddress) {
       await this.email_textbox.type(emailaddress)
    }

    //enter password in the login page
    async enterPassword(password) {
        await this.password_textbox.type(password)
    }

    //click on the login button
    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            await this.login_button.click()
        ])
    }
}