const newString = "Hello "
const newString2 = "World"
// console.log(newString + newString2); //Hello World
//THIS IS A BAD WAY TO CONCATENATE STRINGS AND IS NOT RECOMMENDED , INSTEAD DO STRING INTERPOLATION
// Without template literals, when you want to combine output from expressions with strings, you'd concatenate them using the addition operator +:
// That can be hard to read – especially when you have multiple expressions
// EX:
const a  =5
const b = 10
// console.log("fifteen is " + (a + b) + " and not " + (2*(a) + b) )

// With string interpolation : 
// console.log(`Fifteen is ${a+b} and not ${2*a + b}. `);


/**************String Operations **************************************88 */
// let stringOne = "Aditya"
//or 
let stringOne = new String("Aditya") //use object string which has several operations to work with 
// console.log(stringOne[0]); // A
// console.log(stringOne.length)//6
// console.log(stringOne.toUpperCase())//ADITYA
// console.log(stringOne.toLowerCase())//aditya

// console.log(stringOne.charAt(2));//i
// console.log(stringOne.indexOf('y'));//4

// 1.Substring : 
// substring() extracts characters from indexStart up to but not including indexEnd. In particular:

// If indexEnd is omitted, substring() extracts characters to the end of the string.
// If indexStart is equal to indexEnd, substring() returns an empty string.
// If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped;
//NaN -> 0
// console.log(stringOne.substring(0,3))//Adi

// 2.  Slice: The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// console.log(stringOne.slice(-6,3))//Adi
// console.log(stringOne.slice(-2))//ya

//3. trim : trims white spaces and newline char, has two submethods ->trimStart and trimEnd
let stringTwo = "        Jai         "
console.log(stringTwo.trim());//Jai
//urls replace space with '%20'
const url = "https://LiverpoolFC.com/matches%20at%20Anfield"
// console.log(url.replace('%20', '-'));https://LiverpoolFC.com/matches-at%20Anfield
//to replace all %20
// console.log(url.replaceAll('%20','-'))//https://LiverpoolFC.com/matches-at-Anfield
// console.log(url.includes('manchester'));//false

let url2 = "LiverpoolFC-best-at-anfield"
console.log(url2.split('-'));//[ 'LiverpoolFC', 'best', 'at', 'anfield' ]
// return array seperated by '-'

let text = "5";
let padded = text.padStart(4,"0");
console.log(padded); //0005

let hlo = "hello"
let toprint = hlo.repeat(4)
console.log(toprint); //hellohellohellohello








