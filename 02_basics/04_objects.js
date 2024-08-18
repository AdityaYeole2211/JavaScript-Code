//singleton object creation 
// const newUser = new Object();
// console.log(newUser); //{}
// const newUser2 = {}
// console.log(newUser2);//{}

const tinderUser = {
    name: "sammy",
    email : "sammy@gmail.com",
    isLoggedIn : true
}
// console.log(tinderUser);

//can also use objects as keys 
const regularUser = {
    isLoggedIn : true,
    fullName : {
        realFullname : {
            firstName : "Aditya",
            lastName : "Yeole"
        }
    }
}

// console.log(regularUser);
/*{
  isLoggedIn: true,
  fullName: { realFullname: { firstName: 'Aditya', lastName: 'Yeole' } }
}
*/

//accessing elements: 
// console.log(regularUser.fullName.realFullname.firstName); //aditya
// console.log(regularUser.fullName?.realFullname.firstName); sometimes use this if object existence not confirmed

//combining objects: 
const obj1 = {1 : "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

//m-1
// const obj3 = {obj1,obj2}//same problem as arrays , comes in object of object form
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 
//m-2
// const obj3 = Object.assign(obj1,obj2) //obj1 is target and obj2 is source ., return a new obj
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//better way -> empty is target and all others source , to avoid confusion
// const obj3 = Object.assign({}, obj1, obj2)

//m-3 best way -> spread method 
const obj3 = {...obj1,...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//while working with darabases many times we recive users as array of objects
const users = [
    {
        id : "1",
        email : "1@gamil.com"
    },
    {
        id : "1",
        email : "1@gamil.com"
    },
    {
        id : "1",
        email : "1@gamil.com"
    },
   
]

//accesingg ->
// console.log(users[1].email); //1@gamil.com


//keys and values
//return keys in array from
console.log(Object.keys(tinderUser));  //[ 'name', 'email', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); ///[ 'sammy', 'sammy@gmail.com', true ]

console.log(Object.entries(tinderUser));
/*[
  [ 'name', 'sammy' ],
  [ 'email', 'sammy@gmail.com' ],
  [ 'isLoggedIn', true ]
]*/ 
// ->recieves as array of arrays

//to check ehetehr object has particular key :
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true


//Object De-Construction 
const user123 = {
    name: "Aditya",
    age : 21,
    courseInstructor: "me"
}
//accesing -> 
// console.log(user123.courseInstructor); //tedious task every time 
// const {courseInstructor} = user123
const {courseInstructor : instructor} = user123
//now can write like 
// console.log(courseInstructor); //me 
console.log(instructor); //me 
//used a lot in react

//**************************JSON********************88 */
//JSON is built on two structures:
/*
A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

EX: 
{
  "name" : "Aditya",
  "age" : 21,
  "id" : 4231
}

OR

[
  {},
  {},
  {}
]
*/









