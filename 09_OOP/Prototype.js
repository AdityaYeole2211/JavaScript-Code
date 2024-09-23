let str = "Thor       "
// console.log(str.length); //11
//i want that there should be a property truLength that will print the length wotihout spaces
//we can use .trim()fucntion , but we would have to sue it seperatley on each string .
//we want that truLenght shoudl work on every string bu default

const myHeros = ["thor", "spiderman"]

const heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getPower : function(){
        console.log(`Power is ${this.spiderman}`);
        
    }

}
// heroPower.getPower() //Power is sling
// heroPower.hello() //heroPower.hello is not a function
//but we want to add .hello() fucntionality to not only heroPower but to evryObejct we create. we can do this by adding heroPower.prototype.hello and doing this to evry object we create 
//To do this we know that object itself also has a prototype where we can set this hello property 

Object.prototype.hello = function(){
    console.log("Hello World");   
}
// i.e we setting protoype on higehr levels so that all its lower levels have that property 

heroPower.hello() //Hello World

//now we know that evrything goes thru object and obejct doesnt have any higher protoytpe , therefore everything from arrays , obejcts , fucntions willhave this method now 

myHeros.hello() //Hello World

// but if we give method to array only it will not refelct to objects 
Array.prototype.sayMorning = function(){
    console.log("Good Morning");
    
}
myHeros.sayMorning() //Good Morning
// heroPower.sayMorning() //TypeError: heroPower.sayMorning is not a function

// this happens becaouse if we call certain poropety or method on something , fristly javascropt will search for it in its current context , if not found, searhc in prototype, if not found search in higher prototype, if not higher , until it has no more higher prototypes to search and has reached null 

//PROTOTYPE INHERITANCE
//this can also be linked to prototypes inheritance where properties or methods are shared between certain objects , arrays etc

const user = {
    username : "user"
}
const Teacher = {
    isAvailable : true 
}

const TeachingSupport = {
    isLearning : true,
    teach : "Java"
}

const TA = {
    work : "shareAssignments",
    fulltime : true,
    __proto__ : TeachingSupport //teachinfsuppprot is higher level prototype of TA
}
console.log(TA.isLearning) //true
console.log(TeachingSupport.fulltime); //undefined

//this proto canbe set outside also 
Teacher.__proto__ = user
console.log(Teacher.username); //user
console.log(user.isAvailable);//undefined

//NOTE THAT THIS IS A OLD METHOD NOW THIS IS DONE THRU 
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(Teacher.isLearning); //undefined
console.log(TeachingSupport.isAvailable); //true


//solution to the top problem

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is ${this.trim().length}`)
}

let anotherUsername = "Aditya    "
console.log(anotherUsername.trueLength())
console.log("JavaScript".trueLength())
// JavaScript
// True Length is 10
console.log("Python    ".trueLength())
// Python    
// True Length is 6
// undefined

"Chai".trueLength()

// Chai
// True Length is 4







