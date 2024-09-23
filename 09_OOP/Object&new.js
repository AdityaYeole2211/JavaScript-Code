// JavaScript is a prototype-based, automatically adds a prototype property to functions upon creation. This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function.
// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.25
// JavaScript is a prototype-based language, which means that it uses prototypes to inherit properties and methods from one object to another. In JavaScript, objects can be linked to other objects, forming a prototype chain. 

// In javaScript , everything is a object which can be linked to another object until it ends with a null 

// In JavaScript, every object has an internal property called [[Prototype]], which refers to another object. This forms a chain, known as the prototype chain, where one object inherits properties and methods from another object.

// Objects can inherit directly from other objects, without the need for class-based structures. This means that when you try to access a property or method on an object, JavaScript will first look for it on the object itself. If it doesn't find it, it will follow the prototype chain and look for it on the prototype object.

// The prototype property is an object that is shared among all instances of a function (when that function is used as a constructor). Any properties or methods added to this prototype object become available to all instances created by that constructor.

function Person(name) {
    this.name = name;
}
  
Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
};
  
const person1 = new Person('Alice');
person1.greet(); // Hello, Alice

// Here, greet() is part of the Person prototype, and all instances of Person have access to it through the prototype chain.

// JavaScript tries to link every data structure as a object until it finds no link and returns null
// NOTE THAT FUNCTION IS ALSO A OBJECT AND FUNCTION IS ALSO A FUNCTION 

function multipleBy5(num){
    return num*5
}

//normal way to call ->
multipleBy5(5) //treating as fucntion , calling the fucntion
multipleBy5.power = 2 //treating as object , adding power property 

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{} -> empty obejct (null)
//this prototype sets some context by defualt , the empty parenthesis is the this of the method of that context

function createUser(username, score){
    this.username = username
    this.score = score
}

//now as in Array or any other object we have some methods like map()amd other loops 
//those are defined in prototype of that object. But javascript gives the syntactic sugar that we dont have to write .prototype.method_name everytime . We can access it directly.

//Similarly we can inject our own methods also in object by using .prototype
//Function is also referenced as obejct , so we can add methods to fucntion aslp 

createUser.prototype.increment = function(){
    //score++ // here it will not know whose score to increase if we have multiple instances of this sreateUser 
    //use this to indicate jisne bhi call kiya uska increase karo 
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}


// const Aditya = createUser("Aditya", 25)
// const Yeole =  createUser("Yeole", 20 )

// Aditya.printMe() //TypeError: Cannot read properties of undefined

//Properties have been injected in the createUser prototype , but they are not accessible . because when we transferred it from createUser  to Aditya we didnt tell that these additional methods have been injected in createUser. this is done by the 
// "new" keyword

const Aditya = new createUser("Aditya", 25)
const Yeole = new createUser("Yeole", 20 )

Aditya.printMe() //Score is 25

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




