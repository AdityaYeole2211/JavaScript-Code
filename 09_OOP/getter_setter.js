class newuser{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    set password(value){
        this._password = value
    }
    get password(){
        return this._password.toUpperCase();
    }
}


//sometimes , we store varibales in a certain format but when user asks for it we want to either not give it or return in some ex=ncrypted way 
//for this getter can be used 
//NOTE THAT WHENENEVER WE USE GETTER , MUST USE SETTER ALSO

// console.log(user.password); //123
const user1 = new newuser("a@aditya.ai", "abc")
console.log(user1.password);
//vvimp: 
//when we set password in both constructor and setter , a race condtion type situation arises and following error generates : 
// RangeError: Maximum call stack size exceeded

// for that need to change stter variable name -> kind of cretaing a new variubake only 
//but we hide the real oassdword successfully 
//SIMIMALR ERROR WILL OCCUR FOR GETTER ALSO 
console.log(user1.password); //ABC