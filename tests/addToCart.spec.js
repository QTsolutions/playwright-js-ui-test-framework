import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { LoginPage } from '../pages/loginpage'
import { MegaMenu } from '../pages/megaMenu'
import { RegisterPage } from '../pages/registerPage'
import * as data from "../test-data/addtocart-test-data.json"

    test("Register test", async ({ page }) => {
        const register = new RegisterPage(page);
        await page.goto(data.registerUrl);     
        await register.enterFirstName(data.firstname);
        await register.enterLastName(data.lastname)
        await register.enterEmail(data.email);
        await register.enterTelephone(data.telephone)
        await register.enterPassword(data.password);
        await register.enterConfirmPassword(data.password);
        expect(await register.isSubscribedCeched()).toBeChecked();
        await register.clickTermandCondition();
        await register.clickContinueToRegister();
    })

    test("Login Test", async ({ page }) => {
        const login = new LoginPage(page);
        await page.goto(data.loginurl);
        await login.enterEmail(data.email);
        await login.enterPassword(data.password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");     
    })

    test("Add To Cart", async ({ page }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const megaPage = new MegaMenu(page);
        await page.goto(data.loginurl)
        await login.login(data.email, data.password)
        await homePage.hoverOnMegaMenu();
        await homePage.clickOnApple(); 
        await megaPage.clickonproduct();
        expect(await megaPage.isipodshufflevisible()).toBeVisible
        await megaPage.clickOnAddToCartButton()
    })

