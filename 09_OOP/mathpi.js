// we have math.pi = 3.14 as const in javascript , question is can we change it ???

//no we cannot change it , resaon is the interesting work 

// in javascript we have object elements like username etc , each element has several properties which control its behavior. 
//math module has pi property , where writable is striclty disbaled as false , and we cannot change it also .

// console.log(Math.PI) //3.141592653589793
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/
//as we can see here writable is false we cannot access and change it in javascript 

//BUT WE CAN DO IT ON OBJECTS CREATED BY US 
const user =  {
    username : "name",
    price : 120, 
    isAvailable : true,

    isLoggedIn : function(){
        if(2%2 == 0) console.log(true);
        else console.log(false);       
        
    }
}

//now currently all the properties are accessible and enumerable i.e can run loop on them
// for (let [key,value] of user) {
//     console.log(`${key} ; ${value}`);   
    
// }
//user is not iterable

for (let [key, value] of Object.entries(user)) {
//use this tpe of checls often
    if(typeof value != 'function'){
        // console.log(`${key} :  ${value}`);

    }
    
    
}/*
username :  name
price :  120
isAvailable :  true*/

let descriptor2 = Object.getOwnPropertyDescriptor(user, 'username')
console.log(descriptor2);
//{ value: 'name', writable: true, enumerable: true, configurable: true }

Object.defineProperty(user, 'username', {
    // writable : false,
    enumerable : false
})

descriptor2 = Object.getOwnPropertyDescriptor(user, 'username')
console.log(descriptor2);
/*{
  value: 'name',
  writable: true,
  enumerable: false,
  configurable: true
}*/


for (let [key, value] of Object.entries(user)) {
    //use this tpe of checls often
        if(typeof value != 'function'){
            console.log(`${key} :  ${value}`);
        }
}
/*price :  120
isAvailable :  true*/

