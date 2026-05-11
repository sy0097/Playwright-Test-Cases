const {test,expect}=require("@playwright/test")

test("Verify Google Page",async function({page}){
   await page.goto("https://www.google.com/")
   const URL=page.url()
   await expect(page).toHaveURL("https://www.google.com/")

   const title=await page.title()
   await expect(page).toHaveTitle("Google")

})
