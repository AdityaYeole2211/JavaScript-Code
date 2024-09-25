//how to use class provided as a syntactic sugar after ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     //these are fucnntions only , but since inside class->clalled methods 
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Aditya", "adi@gmail.com", 123)
// console.log(user1.encryptPassword());//123abc
// console.log(user1.changeUsername()); //ADITYA

//BEHIND THE SCENES

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const yeole =  new User("yeole", "yeole@gmail.com", 123)
console.log(yeole.encryptPassword());//123abc
console.log(yeole.changeUsername()); //YEOLE

