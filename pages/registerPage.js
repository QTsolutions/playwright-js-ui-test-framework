exports.RegisterPage =  class RegisterPage{

    constructor(page){
        this.page = page
        this.firstname_textbox = page.locator("#input-firstname")
        this.lastname_textbox = page.locator("input[name='lastname']")
        this.email = page.locator("input[name='email']")
        this.phone_no = page.locator("input[name='telephone']")
        this.password_textbox = page.locator("input[name='password']")
        this.confirm_password = page.locator("input[name='confirm']")
        this.subscribed_checkbox = page.locator("#input-newsletter-no")
        this.termAndCondition = page.locator("//label[@for='input-agree']")
        this.registration_button = page.locator("input[value='Continue']")
    }

    //enter firstname in register page
    async enterFirstName(firstname){
       await this.firstname_textbox.type(firstname)
    }

     //enter lastname in register page
    async enterLastName(lastname){
       await this.lastname_textbox.type(lastname)
    }

     //enter email in register page
    async enterEmail(email){
        await this.email.type(email)
    }

     //enter telephone number in register page
    async enterTelephone(phone){
        await this.phone_no.type(phone)
    }

     //enter password in register page
    async enterPassword(password){
        await this.password_textbox.type(password)
    }

     //enter confirm password in register page
    async enterConfirmPassword(password){
        await this.confirm_password.type(password)
    }

     //subscribed button is checked
     isSubscribedCeched(){
        return this.subscribed_checkbox
    }

    //click on term & condition checkbox
    async clickTermandCondition(){
        await this.termAndCondition.click()
    }

    //click on continue button in register page
    async clickContinueToRegister(){
        await Promise.all([
            this.registration_button.click()
        ])
         
    }
}