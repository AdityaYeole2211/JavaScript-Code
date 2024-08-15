"use strict"; //treats all code as newer javascript

// alert(3+3) // gives error as not defined in nodejs , but works on browser

let number = 3 //number 
let name = "Aditya" // String can write as 'aditya' also 
let loggedIn = false //boolean

// data types in javaSceript

// number
// boolean 
// String
// BigInt
// null -> standalone value not a specific data type
// undefined 

console.log(typeof null); //object -> can be considered as drawback of lang
console.log(typeof undefined); //undefined


// dynamic lang->NO ERROR IN FOLLOWING CODE  
let ans = 1
ans = "answer"
ans = false 

console.log(typeof ans) //boolean

let num1 = 1
const result = num1 + "2"

console.log(result); //12


