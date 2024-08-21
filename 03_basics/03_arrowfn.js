//this keyword 
/*The this keyword refers to the context where a piece of code, 
such as a function's body, is supposed to run. Most typically, 
it is used in object methods, where this refers to the object that the method is 
attached to, thus allowing the same method to be reused on different objects.*/

const user = {
    username : "Aditya",
    price : 199,
    welcome : function(){
        console.log(`${this.username} welcome !!`)
        console.log(this)
    }
}
//here this points to current obj user 
// user.welcome()  //Aditya welcome !!
user.username = "Sam" //context change 
// user.welcome() //Sam welcome !!
//after adding console.log(this) -> { username: 'Sam', price: 199, welcome: [Function: welcome] }
//therefore this points to varibales and thier values  in objects 

//in global scope 
// console.log(this); //{} ->empty object (node environemnt)
//in browser , this points to window object -> REMEMBER

let newuser = function(){
    console.log(this)
}
// newuser()
/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

//BUT 
function  chai(){
    let username = "aditya"
    console.log(this.username);
    
}
function  chai2(){
    username = "aditya" //implicitly global 
    console.log(this.username);
    
}


// chai() //undefined ,works in only objects 
// chai2() //adityav
/*Reason: 
When You Use let:
let declares a variable within the local scope of the function. In the code you provided, u
username is a local variable inside the chai function.
The this keyword inside a regular function (like chai) usually refers to the global 
object (window in browsers) when the function is called directly.
However, since username is declared with let inside the chai function, 
it is not a property of the this context (i.e., the global object). 
Therefore, this.username is undefined because there is no username property on the 
global object.
When You Remove let:
If you remove let, username becomes an implicitly global variable 
(if you're in non-strict mode). This means it is added as a property of the 
global object (this).
Now, when you access this.username, it actually exists and points to "aditya".
*/

//ARROW FUNCTIONS
const addtwo = () =>{
    console.log("welcome")

}
// addtwo()//welcome 
// if curly braces not used can declare as implicit returnn 
const addthree = (num1,num2) => (num1+num2)
// console.log(addthree(2,3)); //5
//NOTE: ALYWAS TRY TO USE ROOUND BRAKCETS BCZ IN RETURNNIG OBJECT , IT IS HELPFUL
// EX:
const returnOBject = () => ({username: "Aditya"})
// console.log(returnOBject()); //{ username: 'Aditya' }

const arrowFun = () =>(console.log(this));

arrowFun() //{}

// Difference  b/w  arrow and normal function
/*No arguments object in arrow functions
Arrow functions do not create their own this binding
Arrow functions cannot be used as constructors
Arrow functions cannot be declared
*/

