// let someNumber = null
// let strNum = String(someNumber)
// console.log(typeof someNumber);
// console.log(typeof strNum);
// let varibale = Number(someNumber)
// console.log(varibale)


let stringNum = "33abc" //.still gets cpnverted to number , alwyas check  what is the num
// let num = Number(stringNum)
// console.log(typeof num)
// console.log(num) //NaN

stringNum = ""
let ans = Boolean(stringNum)
// console.log(ans)

// STRING CONVERSION
//"" ->false
//"abc" ->true

// NUMBER CONBVERSION
//"33abx" -> NaN
// NULL -> 0
//undefined -> NaN
// true -> 1,fALSE -> 0



// ***************************Operations&***************************

let value = 2
// console.log(-value) //-2

//basic operatos same as other langs
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

let str1 = "hello "
let str2 = "World"
// console.log(str1+str2) //hello World

// console.log(1+2) //3
// console.log("1" + 2) //12
// console.log(1 + "2") //12
// console.log("1" + "2") //12
// console.log("1" + 2 + 2); //expected -> 14 actual-> 122
// console.log(2 + 2 + "1");//expected -> 221 as before but actual ->41

//CONFUSING READ ECMA SCRIPT DEOCUMENT FOR PRIMITVE TYPE CONVERSION AND PRECEDENCE
// ******************8EXPLANATION***************************************************
/*Operator Precedence and Associativity: In JavaScript, 
the + operator is used for both addition and string concatenation. 
When the + operator is used with strings, it performs string concatenation 
rather than arithmetic addition.

Type Coercion: JavaScript will coerce (convert) non-string values to strings 
when they are used with the + operator if one of the operands is a string.

The expression "1" + 2 first evaluates "1" + 2. Since "1" is a string, 
JavaScript converts 2 to a string and performs string concatenation. 
The result is "12".
Next, "12" + 2 is evaluated. Again, since "12" is a string,
 2 is converted to a string, and string concatenation is performed. 
 The result is "122".
 ***********************************************************************************************
*/

/*
i*****************************************************************************************8
Operator Precedence and Associativity: In JavaScript, arithmetic operations 
are performed from left to right, and the + operator for addition
 has higher precedence over the + operator for concatenation.

Type Coercion: JavaScript first evaluates the arithmetic operations 
before performing string concatenation.

The expression 2 + 2 is evaluated first, resulting in 4 because 
both operands are numbers.
Next, 4 + "1" is evaluated. Since "1" is a string, JavaScript 
converts 4 to a string, and performs string concatenation. The result is "41".
Thus, the actual result is "41".
**********************************************************************************************************
*/
// console.log(3+2-4*5/6);//BAD PRACTICE 
console.log(+true)//1 -> converted to number
// console.log(true+) //error

//PREFIX POSTFIX
let gameCounter = 100
// console.log(gameCounter++) //100
// console.log(++gameCounter)102










