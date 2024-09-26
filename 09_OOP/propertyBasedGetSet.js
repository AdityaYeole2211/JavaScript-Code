//how were getter and setter implemented when there was no getter and setter and class sysntactic sugar in js

function user(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value
        }
    } )
    Object.defineProperty(this, 'password', {
        get : function(){
            return this._password.toUpperCase();
        },
        set : function(value){
            this._password = value
        }
    } )
}

const nayaAdmi = new user("nayaAdmi@humanity.com", "safestPass")
console.log(nayaAdmi.email);
console.log(nayaAdmi.password);
// NAYAADMI@HUMANITY.COM
// SAFESTPASS