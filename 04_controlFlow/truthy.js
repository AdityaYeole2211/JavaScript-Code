const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values->assumed  to be false

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values->assumed to be true 
// "0", 'false', " ", [], {}, function(){}

/*
PLEASE NOTE :
1. false == 0
2.false  == ''
3. 0 == '' 
all  return true 
*/
//checking  array empty not done thru turuthy 
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//checking empty object-> NOT DONE THRU TRUTHY 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): IF null undefined RECIEVED , HOW TO HANDLE IT 

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")