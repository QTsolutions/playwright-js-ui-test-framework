exports.HomePage = class HomePage{

    constructor(page){
        this.page = page
        this.hover_On_MegaMenu = page.locator("//span[text()[normalize-space()='Mega Menu']]")
    }

    //hover on the megamenu tab on homepage
    async hoverOnMegaMenu(){
        await this.hover_On_MegaMenu.hover()  
    }

    //click on the apple under the mobile section
    async clickOnApple(){
        this.page.click("'Apple'") //linktext
    }
}
