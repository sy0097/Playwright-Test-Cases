
const {test,expect} =require("@playwright/test")

test.use({viewportSize:{width:948,height:570}})

test("Verfiy Error Message" , async function({page}){


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)

    console.log(await page.viewportSize().height)
    

    await page.locator("input[name='username']").type("Admin")

    await page.locator("input[name='password']").type("radha",{delay:100})

    await page.locator("button[type='submit']").click()

    const errorMessage = await page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text").textContent()

    console.log(errorMessage)

    expect(errorMessage.includes("Invalid")).toBeTruthy()

    expect(errorMessage=== "Invalid credentials").toBeTruthy()



    
})