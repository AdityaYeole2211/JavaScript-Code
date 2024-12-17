// ASYNC -> The word “async” before a function means one simple thing: a function always 
// returns a promise. Other values are wrapped in a resolved promise automatically.

//I.E either we return a promise , or else if we return a value,  this fucntion will 
//automatically wrap it inside a promise and then promise is only returned. 
// if we use promise 
/*
const p = new Promise((resolve, reject) => {
    resolve("Promise resolve value!")
})*/
/*
async function getData() {
    return p;
}
const dataPromise = getData()
dataPromise.then((res) => console.log(res)); //Promise resolve value!
//this is similar as p.then()
*/
//WHEN WE RETURN A VALUE 
/*
async function getData2() {
    return "Hello";
}
const dataPromise2 = getData2();
console.log(dataPromise2) //Promise { 'Hello' }
dataPromise2.then((res) => console.log(res)); //Hello
*/
//AWAIT : The keyword await makes JavaScript wait until that promise settles and 
// returns its result. CAN ONLY BE USED IN ASYNC FUCNTIONS 
/*
await literally suspends the function execution until the promise settles, and then 
resumes it with the promise result. That doesn’t cost any CPU resources, because the 
JavaScript engine can do other jobs in the meantime: execute other scripts, handle 
events, etc.

It’s just a more elegant syntax of getting the promise result than promise.then. And, 
it’s easier to read and write.
*/
/*
async function handlePromise(){
    let val = await p;
    console.log(val);
}
handlePromise();//Promise resolve value!

//HOW WAS PROMISE HANDLED BEFORE ASYNC/AWAIT ?
const p1 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("P1 resolved!")
    }, 2000)
})

function handlePromise2(){
    p1.then((res) => console.log(res))
    console.log("Hello World!")
}
handlePromise2();
*/
//Hello World!-> immediatley 
//P1 resolved! -> after 2 secs 
//this is because javascript is a single threaded synchrous language , it does not wait 
//for anything , it will keep this promise  in another call stack and continue executing rest of the program 
// but this is problematic as suppose in the program we have something that depends 
//on the result of the promise after promise execution , hence we need to wait for promise to get resolved
//here async/await is useful 

/*
const p =  new Promise((resolve)=>{
   setTimeout(()=>{
    resolve("Promise resolved ")
   }, 2000) 
})

async function handlePromises() {
    let val = await p;
    console.log("Hello World")
    console.log(val);
}

handlePromises();*/
//after 2 secs:=
// Hello World
// Promise resolved
//therefore execution is stopped until promise is resolved 


//BTS: 
/*
const p1 = new Promise((resolve)=>{
   setTimeout(()=>{
    resolve("P1 resolved!!")
   }, 5000) 
})
const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("P2 resolved!!")
       }, 10000) 
})

async function handlePromise() {
    console.log("Hello World ");
    const val1 = await p1;
    console.log("Await promise 1")
    console.log(val1)

    const val2 = await p2;
    console.log("Await promise2");
    console.log(val2);
       
}
handlePromise();

*/ 

/*
Hello World    //immediatley 
Await promise 1
P1 resolved!!  //after 5 secs 
Await promise2
P2 resolved!! //after 10 secs 
*/

//if p1 -> 10secs and p2 is 5 secs 
/*
Hello World  //immidiatley 
Await promise 1
P1 resolved!!
Await promise2
P2 resolved!!  //after 10 secs 
*/

//EXPLANATION : 
/*
handlePromise is an async function that pauses execution at each await until the 
corresponding Promise resolves.

Step 1: Execution Begins
handlePromise() is called.
The JavaScript engine starts executing the handlePromise function.
Step 2: "Hello World"
The line console.log("Hello World "); runs immediately because it is synchronous.

Step 3: First await (p1)
The line const val1 = await p1; pauses the execution of the handlePromise function.
await waits for p1 to resolve, but it does not block the entire thread. Instead:
The current task is paused, and the event loop takes over.
The engine moves on to other tasks if there are any (e.g., handling other events or executing queued callbacks).
After 5 seconds, p1 resolves with "P1 resolved!!".
The paused handlePromise function resumes from the await p1 line.

When encountering await, the engine suspends the function and removes it from the call stack.

The next line const val2 = await p2; again pauses execution of the function.
p2 takes 10 seconds to resolve.
Since 5 seconds have already passed, it will take 5 more seconds (a total of 10 seconds since execution began) for p2 to resolve.
During this pause, the event loop continues handling other tasks if available
*/


//REAL-WORLD EXAMPLE 
const API_URL = "https://api.github.com/users/AdityaYeole"
// async function api_caller(){
//     const data = await fetch(API_URL)
//     const jsonValue = await data.json() //.json() is also a promise 
//     console.log(jsonValue["url"])
// }

// api_caller() //https://api.github.com/users/adityayeole

// fetch() (promise) => data => .json()(promise) => response(jsonValue)

//ERROR HANDLING -> use try catch block 
const API_URL2 = "https://randomurldontknowwhatitis.com"
async function api_caller(){
  try {
    const data = await fetch(API_URL2)
    const jsonValue = await data.json() //.json() is also a promise 
    console.log(jsonValue["url"])
  } catch (error) {
    console.log(error)
  }
}

api_caller()// TypeError: fetch failed
//or can use old method also 
api_caller().catch(err => console.log(err)); // as  async fucntion return promises , this is valid 


//ASYNC/AWAIT VS PROMISE.THEN, .CATCH()
// async/await is just syntactic suagr over older methods like promise then /catch 
// while using aysnc/await we have to use less promise chainig and callbacks . it is a new way to write code 