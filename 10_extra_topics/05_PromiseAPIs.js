/*
1. Promise.all : - 
Let’s say we want many promises to execute in parallel and wait until all of them are ready.

For instance, download several URLs in parallel and process the content once they are all done.

That’s what Promise.all is for.

The syntax is:

let promise = Promise.all(iterable);
Promise.all takes an iterable (usually, an array of promises) and returns a new promise.

The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.
*/

//Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.
//If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error. 
//If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.
//Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s passed to the resulting array “as is”. EX: Promise.all([p1, 2, 3 ]) =>> [val1, 2, 3]

/*
2. Promise.allSettled
Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

{status:"fulfilled", value:result} for successful responses,
{status:"rejected", reason:error} for errors.
For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.
So for each promise we get its status and value/error.
*/
/*
Promise.race
Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

The syntax is:

let promise = Promise.race(iterable);
*/

/*
Promise.any
Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.
*/
//********************EXAMPLES*********************** */

//1. Promise.all
/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("P1 Success"), 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("P2 Success"), 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("P3 Success"), 2000);
})

Promise.all([p1,p2,p3]).then((result) => console.log(result));
//[ 'P1 Success', 'P2 Success', 'P3 Success' ]

//failure condition
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 Fail"), 3000);
})
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 1000);
})
const p6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 2000);
})

Promise.all([p4,p5,p6])
.then((result) => console.log(result))
.catch((err) => console.error(err));
// P1 Fail
//whicchever will fail will give that only , unless all sucess

*/

//Promise.allSettled 
/*
const p1  = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P1 Success"), 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("P2 Success"), 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=> reject("P3 FAIL"), 2000);
})
*/
// Promise.allSettled([p1,p2,p3]).then((res)=> console.log(res));
/*[
    { status: 'fulfilled', value: 'P1 Success' },
    { status: 'fulfilled', value: 'P2 Success' },
    { status: 'rejected', reason: 'P3 FAIL' }
]*/
//no matter what will goive results after all promises either fulfulled or rejected
// most safe api call 

//Promise.race 
/*
const r1 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("r1 success"), 3000);
})
const r2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("r2 success"), 2000);
})
const r3 = new Promise((resolve, reject) => {
    setTimeout(()=> reject("r3 fail"), 1000);
})

Promise.race([r1,r2,r3])
.then((res) => console.log(res))
.catch((err)=>console.error(err));
*/
//r3 success
// if r3 is considered rejected -> //r3 fail
// will return the first settlled promise , doesnt matter whether fulfilled or rejected

//Promise.any 
/*
const b1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("b1 success"), 3000);
})
const b2 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("b2 success"), 1000);
})
const b3 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("b3 success"), 2000);
})

Promise.any([b1,b2,b3])
.then((res)=> console.log(res))
.catch((err) => console.log(err));*/
//b2 success
//if first fails , will give next successful prmoise
/*
const b1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("b1 success"), 3000);
})
const b2 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("b2 fail"), 1000);
})
const b3 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("b3 fail"), 2000);
})

Promise.any([b1,b2,b3])
.then((res)=> console.log(res))
.catch((err) => console.log(err));
*/
//b1 success

//if all of them fails -> aggrehgate error , ot retuns array of error -> need to access like err.error
const b1 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("b1 fail"), 3000);
})
const b2 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("b2 fail"), 1000);
})
const b3 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("b3 fail"), 2000);
})

// Promise.any([b1,b2,b3])
// .then((res)=> console.log(res))
// .catch((err) => console.log(err));
/*
[AggregateError: All promises were rejected] {
    [errors]: [ 'b1 fail', 'b2 fail', 'b3 fail' ]
} */
Promise.any([b1,b2,b3])
    .then((res)=> console.log(res))
    .catch((err) => {
        console.log(err)
        console.log(err.errors)
    });
    /*
    [AggregateError: All promises were rejected] {
        [errors]: [ 'b1 fail', 'b2 fail', 'b3 fail' ]
      }
      [ 'b1 fail', 'b2 fail', 'b3 fail' ]
    */