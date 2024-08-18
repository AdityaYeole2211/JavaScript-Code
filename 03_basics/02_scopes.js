//global scope 
let a  = 100
if(true){
    let a = 10
    const b = 30 //local scope 
    var c = 90
    console.log("inner: ", a); //10
    
}

// console.log(a); //error 
// console.log(b);//error
// console.log(c); //90 -> HENCE , DONT USE VAR
// 
// console.log(a); //100


/***********************INteresrting: Concept of Hoisting **********88 */

console.log(addOne(2)); //3

//this is a fucntion -> can be initialized before initialization 
function addOne(num){
    return num+1
}

console.log(addTwo(2)); //error-> Cannot access 'addTwo' before initialization

//this is also similar to fucntion , -> EXPRESSION ->cannot be accessed before initialization 
const addTwo = function(num){
    return num+2

}
