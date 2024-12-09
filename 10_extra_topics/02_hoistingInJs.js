//What is hoisting ? 
/*
a variable can be used before it has been declared.
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.
Using a const variable before it is declared, is a syntax error, so the code will simply not run.

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.


The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior; import declarations are hoisted with type 1 and type 4 behavior.
*/

// ex:
//this is dwefault behavoiur 
/*
var x = 7;

function getName(){
    console.log("HELLO");
}

console.log(x);
getName();
*/
//output :
//7
//hello
console.log(x);
getName();
var x = 7;

function getName(){
    console.log("HELLO");
}

//output :  undefined , hello 

// this is because before execution of javascript code , it will go thru memeory allocation phase and allocate memory to all the variables in the code 
//the varibales are allocated placeholder 'undefined' whereas , fucntions are 
//allocated  copy of the fucntion , hence undefiend , funciton output is printed
//ex2: 
// console.log(y)
getName2();
let y = 7;
var getName2 = () =>{
    console.log("hello2");
}
// output :
//ReferenceError: Cannot access 'y' before initialization
//TypeError: getName2 is not a function

//this is becaouse this a=hoisting things works with var , 
//secondly arrow fucntins will be considered as just another varibale 
//hence not allowing the execttuion of a variable .

