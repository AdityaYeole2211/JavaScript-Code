/*
1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument. 
3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.
*/

/*
const cart = ["shoes", "bag", "PS5", "FC24Game"];

const promise = createCart(cart);

promise.then((orderId)=> {
    console.log(orderId)
}).catch((err)=>{
    console.log(err);
})





function createCart(cart){
    //return a promise 
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            let err = new Error("CART NOT VALIDATED!!");
            reject(err);
        }
        else{
            const orderId = 12345;
            resolve(orderId);
        }
    })

    return pr;

}

function validateCart(cart){
    return false;
}
*/

/*  E-COMMERCE PROMISE EXERCISE -> CREATEORDER, PROCEEDTOPAYEMTN, SHOW ORDER SUMMARY 
UPDATEWALLET
*/

const cart = ["shoes", "bag", "PS5", "FC24Game"];


createOrder(cart)
.then(function(orderId){
    console.log(`order ID : ${orderId}`)
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(message){
    console.log(`${message}`)
    return 4500;
})
.then(function(amount){
    return showOrderSummary(amount)
})
.then((amount) =>{
    console.log("wallet debited by : ", amount)
})
.catch((err)=>{
    console.log(err);
})
.then(
    console.log("THis will execute no matter what!")
)




function createOrder(cart){
    return new Promise(function(resolve , reject){
        if(!validateCart(cart)){
            reject("CART NOT VALID !!!")
        }
        else {
            let orderId = 1234
            setTimeout(resolve(orderId), 3000)
        }
    })
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        if( 2 != 4 ){
            resolve("Payment successfull of amt : 4500" )
        }
        else{
            reject("ERR: INVALID ORDER ID!!")
        }
    })
}

function validateCart(cart){
    return true;
}

function showOrderSummary(amount){
    return new Promise((resolve, reject)=>{
        if(amount > 0 && (3 !=6 )){
            setTimeout(resolve(amount), 1000)
        }
        else {
            reject("ERR: AMOUNT INVALID !!")
        }
    })
}