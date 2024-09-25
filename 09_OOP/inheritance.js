class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
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

const user1 = new Teacher("user1", "ok@fb.com", 123)
user1.addCourse()//new course added by user1
user1.logMe()//username is user1
console.log(user1 === Teacher);//false
console.log(user1 instanceof Teacher); //true
console.log(user1 instanceof User); //true

const user2 = new User("usernameMine123")
// user2.addCourse()//error 
user2.logMe()//username is usernameMine123
console.log(user2 === Teacher);//false
console.log(user2 instanceof Teacher); //false
console.log(user2 === User) //false
console.log(user2 instanceof User);//true
console.log(user2 instanceof Teacher);//false



