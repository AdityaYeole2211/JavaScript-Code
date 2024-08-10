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


// console.log(3+2-4*5/6);//BAD PRACTICE 
console.log(+true)//1 -> converted to number
// console.log(true+) //error

//PREFIX POSTFIX
let gameCounter = 100
// console.log(gameCounter++) //100
// console.log(++gameCounter)102










