//when we call afucntion a execution context is created and added in call stack 
//when we call fucntion inside a  fcuntion , a seperate ec is created.
//problem is when we want to set the properties of parent fucntion usoing the child fucntion 
//but it will set the varibale in its execution context and it will vanish when the ec is deleted from call stack 
//for this probelm , .call() is used 

//ex: 

function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username , email, age){
    setUsername(username)
    this.email = email
    this.age = age
}
// const newUser = new createUser("aDITYA", "ADITYA@FB.COM", 21)
// console.log(newUser); 
//called
//createUser { email: 'ADITYA@FB.COM', age: 21 }, 
//username not set 
//fucntion is called but username not set as we know function also has his own this context , so the fucntion is setting username in its ownn context and then it is gone once the fucntion execution finishes
//to keep that context we use call
// call is used to hold the reference of that fcuntion , we pass this from parent to tell child that whatever change u are making , make in parent this , not in ur this 

function createUser2(username , email, age){
    setUsername.call(this, username)
    this.email = email
    this.age = age
}
const newUser = new createUser2("Aditya", "ad@fb.com", 21)
console.log(newUser);
/*called
createUser2 { username: 'Aditya', email: 'ad@fb.com', age: 21 }*/

/*
The call() method of Function instances calls this function with a given this value and arguments provided individually.
thisArg
The value to use as this when calling func. If the function is not in strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to objects.

arg1, …, argN Optional
Arguments for the function.
Note: This function is almost identical to apply(), except that the function arguments are passed to call() individually as a list, while for apply() they are combined in one object, typically an array — for example, func.call(this, "eat", "bananas") vs. func.apply(this, ["eat", "bananas"]).

call-> gives current ec to other fucntin=on
*/