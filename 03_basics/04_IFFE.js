//IMMEDIATELY INVOKED FUNCTION  EXPRESSION (IFFE)

/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function 
that runs as soon as it is defined.
The first is the anonymous function with lexical scope enclosed within the 
grouping operator (). This prevents accessing variables within the IIFE 
idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () 
through which the JavaScript engine will directly interpret the function.

How does an IIFE's being called immediately prevent it from polluting global scope?

It doesn't.
Being a function stops it polluting the global scope.
Variables declared inside a function exist only within that function*/

(function chai(){
    //named IFFE
    console.log(`db connected`);    
})(); //db connected

// ()() -> first () is for function description , second for calling the fucntion

(() => {
    console.log(`dbconnexted two`);
    
})(); //dbconnexted two

((name) => {
    console.log(`chai is good ${name} `);
}
)("aditya") //chai is good aditya 