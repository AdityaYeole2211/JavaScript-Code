/*
Two types  of object created ->
1. Singleton -> created when object constructor used to create new object 
   ex: Object.create()

2. Non-singleton -> when object literals used
  ex: const newObj = {} 
*/

const mySym = Symbol("key1")
const jsUser ={
    name : "Aditya",
    email : "aditya@google.com",
    // mySym : "MyKey2", //wrong way to declare symbol -> it is considered string now 
    [mySym] : "newkey", //correct way 
    age : 21,
    isLoggedIn : false,
    lastLoggedDays : ["Monday", "Saturday"]

}
//Note that keys are implemented as strings

//accesing elements: 
// console.log(jsUser.email); // normal way but can fail in certain circumstances
// console.log(jsUser["email"]); //proper way to do 
//if suppose keys are in following way 
// "full name" : "Aditya Yeole" -> then first method fails and second can only be used 

//symbol as a key : 
// console.log(jsUser.mySym); //MyKey2
// console.log(typeof jsUser.mySym); //string 

//if declared in proper way 
// console.log(jsUser[mySym]);

//freesing objects  to now allow changing 
// Object.freeze(jsUser);
// jsUser.email = "aditya@microsoft.com"
// console.log(jsUser.email); //aditya@google.com


console.log(jsUser);
/* {
name: 'Aditya',
email: 'aditya@google.com',
age: 21,
isLoggedIn: false,
lastLoggedDays: [ 'Monday', 'Saturday' ],
[Symbol(key1)]: 'newkey' //NOTICE THIS 
}
*/

//functins 
jsUser.greeting = function(){
    console.log("helloe");
    
}
jsUser.greetingTwo = function(){
    console.log(`hello ${jsUser.name}`);
    
}

// console.log(jsUser.greeting); //[Function (anonymous)]

console.log(jsUser.greeting());//helloe
// console.log(jsUser.greetingTwo()); /hello Aditya




