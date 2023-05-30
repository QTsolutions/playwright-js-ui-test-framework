exports.MegaMenu =  class MegaMenu {

    constructor(page) { 
        this.page = page
        this.click__on_product = page.locator("(//img[@class='lazy-load'])")
        this.add_to_cart_button = page.locator("(//button[contains(@class,'text btn')])[2]")
    }

    //clcik on the product 
    async clickonproduct() {
        await this.click__on_product.nth(3).click()
    }

    //text is visible of the ipod
    async isipodshufflevisible() {
        const toast = this.page.locator("//h1[text()='iPod Shuffle']");
        await toast.waitFor({ state: "visible" })
        return toast;
    }

    //click on the addtocart buuton
    async clickOnAddToCartButton(){
        await this.add_to_cart_button.click()
    }
}