class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
    static createID(){
        console.log(123);
        
    }
}

class Teacher extends User{
    constructor(username, email , pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`new course added by ${this.username}`);
        
    }
}

const user1 = new User("Aditya")
// user1.createID() //user1.createID is not a function, not avaialablle to instances of object 

const user2 =  new Teacher("Adiya", "ad@gm", 123)
user2.createID()//user2.createID is not a function
//not avialable to  inherited also 
/*The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.*/
