//dataypes are clssifed into two types on the basis of their pass by property 
//if pass by value / call by value -> primitive ->copy of data send not the exact daata
//if pass by reference -> Referenced(non-primitive) -> same data is send.


//Primitive -> 7 types
// 1. Number 2. String 3. bOLLEAN 4. null 5. undefined 6. Symbol 7. BigInt

// let num = 1  //number 
// num = 5.6//number 
// let str = "ac" //stirng 
// let logIN = false //boolean
// let temp = null //null
// let userEmail //undefined
//symbol return type is also symbol
let Id = Symbol('123') //symbol
let anotherId = Symbol('123') //symbol
//although both have same sirng both return different value 
// console.log(Id == anotherId) //false

// Referenced / Non Primimtive 
// Arrays , Objects . functions 
let got = ['Daemon', 'Aemeond', 'Viserys']
// console.log(typeof got); //OBJECT

let   myObj = {
    Name : "Aditya",
    Age : 21,
};

// console.log(typeof myObj); //OBJECT

let newFunc =function(){
    console.log("Helloe World");
    
}

// console.log(typeof newFunc)//FUNCTION



// *********************************************************************************************88
// STACK (PRIMITIVE)->GIVES COPY OF VARIABLE |||| HEAP (NON-PRIMITIVE) ->GIVE REFERENCE TO THE SAME VARIABLE

let userone = "Aditya"
let userTwo = userone
userone = "yeole"

// console.log(userone); //yeole
// console.log(userTwo); //Aditya

// UserTwo value is still aditya as it is taking value from a copy of userone which is not changed

let newObj1 = {
    Name : "Aditya"
}

let newObj2 = newObj1

newObj1.Name = "Yeole"

console.log(newObj1.Name);//Yeole
console.log(newObj2.Name);//yeole

//bxc both referencing same object in heap 






