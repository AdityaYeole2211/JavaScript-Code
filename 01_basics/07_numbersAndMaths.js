let score = 100
//automatically detects as number 
//but sometimes we want to explicitly ensure that it is a number
let balance = new Number(20);
// console.log(score); //100
// console.log(balance); //[Number: 20]

// console.log(balance.toString());'20'
// console.log(balance.toString().length); //2

//to fixed -> used to specify decimal places; The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.

// console.log(balance.toFixed(2)); //generally 2 used -> 20.00

let num2 = 1.898989
// console.log(num2.toPrecision(3));//1.90

num2 = 12.898989
// console.log(num2.toPrecision(3)) //12.9

num2 = 1234.898989
// console.log(num2.toPrecision(3)) 1.23e+3 ->USE CAREFULLY 

let num3 = 100000000 //->difficult to count zeroes 
// console.log(num3.toLocaleString()); //100,000,000 ->by defualt gives in us number system
// console.log(num3.toLocaleString('en-IN')); //10,00,00,000-> indian system

// ***************************** MATHS ************************************************8

// console.log(Math);//Object [Math] {}

// console.log(Math.abs(-4)); //4 
// console.log(Math.round(4.2)); //4
// console.log(Math.round(4.8));//5
// console.log(Math.ceil(4.2));//5 -> alwyas rounds off to next integer
// console.log(Math.floor(4.9)); //4 ->alwyas rounds off to prevois integer
// console.log(Math.min(3,2,1,4,6,7));//1
// console.log(Math.max(3,2,1,4,6,7));//7


console.log(Math.random()); // generates number b/w 0 and 1  //0.18939101855285245
console.log(Math.random()*10); // to get values b/w 1 and 10 //5.342177288357927
console.log((Math.random()*10) + 1); // to avoid when generate 0.01 //3.5156497623404794
console.log(Math.floor((Math.random()*10) + 1)); // to avoid unnecessary decimals  //1


// to get b/w a range 
let min  = 10;
let max = 20;

let generatedNumber = Math.floor(Math.random() * (max-min+1) + min) //remember 
console.log(generatedNumber); //17
















