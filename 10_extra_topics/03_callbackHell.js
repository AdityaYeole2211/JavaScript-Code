//Callback Hell
/*Callback Hell refers to a situation in programming where multiple nested callbacks are used to handle asynchronous operations, resulting in code that is difficult to read, debug, and maintain. It typically happens when each operation depends on the result of the previous one, leading to deeply nested structures.

Example of Callback Hell
*/
// Example of Callback Hell
setTimeout(() => {
    console.log("Task 1");
    setTimeout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
            setTimeout(() => {
                console.log("Task 4");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
//Issues with Callback Hell:

//Readability: Code becomes difficult to read as it gets more deeply nested.
//Error Handling: Managing errors in nested callbacks is complicated.
//Maintainability: Adding or modifying functionality becomes cumbersome.

//Inversion of Control
/*Inversion of Control occurs when you pass a callback function to another function, effectively giving control of its execution to the external function. This can lead to problems because:

1. You lose control over when and how the callback is executed.
2. The callback could be called multiple times, not at all, or with unexpected arguments if the external function is poorly implemented.
3. Debugging becomes challenging if the external function does not behave as expected.
*/

//PROMISES AREA SOLTUION TO THESE PROBLEMS 

//SUMMARY :
/*
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
*/
