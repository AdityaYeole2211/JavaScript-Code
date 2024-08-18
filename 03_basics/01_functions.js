//declare functions 
function addNumbers(number1, number2){
    // console.log("Adding numbers......");
    return number1+number2 
}

const ans = addNumbers(3,4)
// console.log(ans); //7
//but if no agruments d=given 
const reuslt = addNumbers()
// console.log(reuslt); //NaN

function loginMessage(username){
    console.log(`${username} just logged in`);
    
}

// loginMessage("aditya") //aditya just logged in
// but if no value given 
// login/Message() //undefined just logged in -> takes value as undefined 
///always check for data type

function loginMessage2(username){
    if(username === undefined /*strict check, or  (!username)*/){
        console.log("enter valid username");
        return
        
    }
    console.log(`${username} just loggen in `);
    
}
// loginMessage2()//enter valid username
// loginMessage2("aditya") //aditya

// rest operator -> same as spread operartor but depends on use case , what to call 
//taking multiple arguments as paarameter -> rest operator 

function returnVal(...num1) {
    return num1
}
function returnVal2(val1,val2, ...num1) {
    return num1
    
}
// if not used rest operator , it will only take first argument and ignore rest

// console.log(returnVal(1,2,3,4,5)); //[ 1, 2, 3, 4, 5 ]
// console.log(returnVal2(1,2,3,4,5)); //[ 3, 4, 5 ]

//taking objects as input 
const myobj = {
    username : "aditya",
    price : 199
}

function objectHandler(anyobject){
    console.log(`${anyobject.username} is username and price is ${anyobject.price}`);
    
}

objectHandler(myobj) //aditya is username and price is 199
//ensure that keys are present , else returns undefined
objectHandler({
    username : "a",
    price : 189
}) //a is username and price is 189

//taking arrays 
const newarr = [1,2,3,4]
function returnSecondVal(anyArray){
    return anyArray[1]
}
console.log(returnSecondVal(newarr)); //2

