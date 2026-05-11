const {test,expect}=require("@playwright/test")

test("My First Test",async function({page}){

    expect(1).toBe(1)

})

test.skip("My Second Test", async function({page}){
    expect(1).toBe(2)
})

test("My Third Test", async function({page}){
    expect(10).toBe(10)
})

test("My fourth Test", async function({page}){
    expect(200).toBe(200)
})

test("My fifth test", async function({page}){
    expect("Anilkumar").toContain("Anil")
    expect(true).toBeTruthy()
})
///when you enter test.only then only that test will be executed and rest of the tests will be ignored. This is used when you want to run only one test and ignore the rest of the tests. This is useful when you are debugging a test and you want to run only that test and ignore the rest of the tests.
///when you enter test.skip then that test will be skipped and rest of the tests will be executed. This is used when you want to skip a test and run the rest of the tests. This is useful when you have a test that is not working and you want to skip that test and run the rest of the tests.

test("My Sixth test", async function({page}){
     expect(false).toBeFalsy()
})

test("My Seventh test", async function({page}){

    expect("Anilkumar".includes("Anil")).toBeTruthy()
})

