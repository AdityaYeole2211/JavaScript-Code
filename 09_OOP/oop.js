const user1 = {
    username : "Aditya",
    isLoggedIn : true,
    age : 21,

    getUserDetails : function(){
        console.log("get user details")   
        // console.log(`username: ${username}`)//gives error as with declaration if cuntion execution constext has changed and it does not which username we want 
        console.log(this.username); //Aditya
        console.log(this) //entire object
         
    }
}

//console.log(user.username);
// console.log(user.getUserDetails());
//output: 
/*Aditya
get user details
undefined*/

// console.log(user.getUserDetails());
// console.log(this)//{}, but in browser -> window object
// if we want to add user2, user3 and so on -> have to write everytime , to reduce this overhead , use constructors


//Constructor fucntion: Sometimes we need to create many objects of the same type. To create an object type we use an object constructor function. It is considered good practice to name constructor functions with an upper-case first letter.

function User(username, age,loginCount){
    this.username = username;
    this.age = age;
    this.loginCount = loginCount
    //this is adding username , age , logincount attributes to the empty object we get in this keyword in global context
    return this
}

// const userOne  = User("Aditya", 21, 12)
// console.log(userOne);
/*outpput: 
username: 'Aditya',
  age: 21,
  loginCount: 12
aloing with some other fglobak parameters also
*/

// but if  we create another user ->> userone is ovwerwrutten
// const userTwo = User("Yeole",21, 20)
// console.log(userTwo);
//overwritten user two 

// To avoid this we use new keyword , it creates a new instance (new copy) of the object or function and keeps  its execiuton context (this) different from others

const userOne  = new User("Aditya", 21, 12)
const userTwo  = new User("Aditya", 21, 12)
console.log(userOne);
console.log(userTwo);
/*User { username: 'Aditya', age: 21, loginCount: 12 }
User { username: 'Aditya', age: 21, loginCount: 12 }*/

console.log(userOne.constructor); //[Function: User] returns reference of own

//instanceof property : The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance. 
// This usually (though not always) means object was constructed with constructor.

function c(){}
function d(){}

const o =  new c()
console.log(o instanceof c); //true
console.log(o instanceof d);//false














