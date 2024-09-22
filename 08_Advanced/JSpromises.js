/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.*/

// "Producing code" is code that can take some time. "Consuming code" is code that must wait for the result. A Promise is an Object that links Producing code and Consuming code. A JavaScript Promise object can be:
//         Pending -> initial state, neither fulfilled nor rejected.
//         Fulfilled
//         Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object 

//CALLBACK FUNCTION : Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function. A JavaScript callback is a function which is to be executed after another function has finished execution. 

//Promise.then() takes two arguments, a callback for success and another for failure Both are optional, so you can add a callback for success or failure only.

// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached. The promise methods then(), catch(), and finally() are used to associate further action with a promise that becomes settled. The then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case. The catch() and finally() methods call then() internally and make error handling less verbose. For example, a catch() is really just a then() without passing the fulfillment handler. As these methods return promises, they can be chained.  

//JavaScript handles promises and other asynchronous tasks using a job queue (also called the microtask queue). When a promise is created or resolved, JavaScript doesn't immediately jump to handle it. Instead, the code inside the promise or the .then() callbacks are queued. JavaScript will pick a job (like handling a resolved promise) from this queue only when it's done with the current task. JavaScript uses a single-threaded model, meaning it can only do one thing at a time. But with the job queue, it can handle multiple asynchronous tasks in an efficient way. When you create a promise or add .then() handlers, JavaScript schedules those handlers to run later (once the promise is resolved or rejected). These tasks go into the job queue. JavaScript executes the current script to completion. After that, it looks at the job queue and picks the next job (like resolving a promise or running .then()). It keeps doing this until all jobs are finished. 
// EX: 
// console.log("Start");

// const promise = new Promise((resolve, reject) => {
//   console.log("Promise executor");
//   resolve("Resolved!");
// });

// promise.then(result => {
//   console.log(result); // This will be added to the job queue
// });

// console.log("End");

//output: Start
// Promise executor
// End
// Resolved!

// NOTE: EARLIER , PROMISES NOT PART OF CORE JAVASCRIPT , USED BY ADDING LIBRARY SUCH AS Q OR BLUEBIRD , BECAME VERY SUCCESSFUL THATS WHY NOW ADDED TO CORE JAVASCRIPT AND CAN USE DIRECTLY 

//PROMINSE CREATION
const promiseOne = new Promise(function(resolve, reject){
    //do async tasks such as database calls, network , cryptography etc
    setTimeout(function(){
        console.log("Async Task 1")
        resolve() //linkinh then handler to the promise 
    }, 1000)
})

//PROMISE CONSUME -> RESOLVE METHOD RUNS HERE
promiseOne.then(function(){
    console.log("async raks 1 done ")
})

//output: 
// Async Task 1
// async raks 1 done
//OTHER SYNTAX TO WRITE AND CONSIUME PROMISES: 
new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("async task 2 ")
        resolve()
    },1000)
}).then(function(){
    console.log("async task 2 done ");
    
})
//async task 2 
//async task 2 done 

//resolve can also be used to return values 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user : "Aditya", username: "Aditay123"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})
//{ user: 'Aditya', username: 'Aditay123' }

//reject is to handle if promise is not fulfilled then wjat to do. Also , not only one then , we can add multiple then and then catch -> called chaining
//if lower then recieves vvlaues from the upper then 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({user: "Aditya", username: "aditya123"})
        }
        else{
            reject("ERR: SOMETHING WENT WRONG")
        }
    }, 1000)
})

// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username);    
// }).catch(function(error){
//     console.log(error);
// })
// output if eror is true : ERR: SOMETHING WENT WRONG
//output if error is false : 
//{ user: 'Aditya', username: 'aditya123' }
// aditya123

//NOTE IF ERROR RETURN IS POOSSIBLE MUST WRITE CATCH STATEMENT

//.finally() -> definetly executres after either .then() or .catch() exectuted 
// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username);    
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise four done ");
    
// })

//ASYNC AWAIT : 
// async makes a function return a Promise. await makes a function wait for a Promise.allThe await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
//instead of wrinting then , catch we can use async await 

// async function consumePromiseFour(){
//     //this fucntion returns a promise 
//     const response = await promiseFour
//     console.log(response)
// }
//this will give error as it assumes that response will be valid , but may be it returnns eroro , so must handle it using try catch block 
async function consumePromiseFour() {
    try {
        const response = await promiseFour
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
//{ user: 'Aditya', username: 'Aditay123' }

//NOTE : ONLY DB CALLS , NETWORK DONT TAKE TIME , SOME OTHER THINGS ALSO TAKE TIME 
//MUST WAIT FOR IT ALSO 

// async function getAllUsers() {
//     try {
//         const response = fetch('https://api.github.com/users/adityayeole')
//         const data = response.JSON()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);    
//     }
// }
getAllUsers() //THIS WILL NOT WORK , AS .JSON ALSO TAKES TIME , NEED TO AWAIT FOR IT ALSO 

async function getAllUsers() {
    try {
        const response = fetch('https://api.github.com/users/adityayeole')
        const data = (await response).json
        console.log(data);
    } catch (error) {
        console.log("E: ", error);    
    }
}
getAllUsers()

//then catch syntax
fetch('https://api.github.com/users/adityayeole')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error);    
})

//NOTE THAT 
// WHEN WE RUN EVERYTHING , THIS RUNS FIRST AND THEN ALL of the rest 
