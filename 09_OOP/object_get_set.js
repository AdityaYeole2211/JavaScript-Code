const user = {
    _email : "a@a.com",
    _password : "abcsd",

    get email(){
        return this._email.toUpperCase()
    },
    set email(balue){
        this._email = balue
    }

}

const newUser = Object.create(user) //usoing factory ucntion to create new
console.log(newUser.email); //A@A.COM

//NOTE THAT :
/* javacript considers _varname as a kind of private variable , though it is not private we can access it outside also , thats the reason , when we write get email()
it gets _email and smimilarly when we access outside , user.email, it understands asking for _email. get email() is method mounted on top of email variable , 
get email() is a method mounted on top of process of accessing variables from memonry and putting in meemory */
