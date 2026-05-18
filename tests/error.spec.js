
const {test,expect} =require("@playwright/test")

test("Verfiy Error Message" , async function({page}){


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").type("Admin")

    await page.locator("input[name='password']").type("radha",{delay:100})

    await page.locator("button[type='submit']").click()

    const errorMessage = await page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text").textContent()

    console.log(errorMessage)

    expect(errorMessage.includes("Invalid")).toBeTruthy()

    expect(errorMessage=== "Invalid credential").toBeTruthy()



    
})