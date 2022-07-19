// const obj = require("./sum")
// const sum = require("./sum")
// const fatchdata = require("./sum")
const fatchPromise = require("./sum")
const Common = require("./before")

// Functions test

// test("Test Case",()=>{
//     expect(sum(10,5)).toBe(15)
//     expect(sum(10,5)).not.toBe(5)
// })

// test("Object testing",()=>{
//     expect(obj()).toEqual({name : "salman"})
// })


//  call back function

// test("Callback", response => {
//     function callback(data){
//         try{
//             expect(data).toBe("Hello Call back")
//             response()
//         }catch(error){
//             response(error)
//         }
//     }
//     fatchdata(callback)
// })

// Fatch Promise

// test("fatchPromise",()=>{
//     return fatchPromise().then((data)=>{
//         expect(data).toBe("Finally")
//     })
// })

// Fatch peomise with Async / Await


beforeEach(() => {
 console.log(Common())
})

test("abc", async () => {
    const data = await fatchPromise();
    expect(data).toBe("Finally")
})

test("abc", async () => {
    const data = await fatchPromise();
    expect(data).toBe("Finally")
})