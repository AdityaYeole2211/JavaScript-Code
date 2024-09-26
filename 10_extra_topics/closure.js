function outer(){
    let username  = "Aditya"
    function inner(){
        let pass = "123"
        console.log("inner: ", username);  //aditya      
    }
    function innerTwo(){
        console.log("innerTwo", username); //aditya  
        // console.log(pass); //eroor
             
    }
    // console.log(pass); //error
    inner()
    innerTwo()
    
}

outer()
// console.log("veyr beyr outer: ", username); //eroro


// Lexial Scoping :
// Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program’s execution.


// Variables and functions have different levels of scope:
// 
// Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
// Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
// Nested Scope: Inner functions have access to variables in their parent functions.
// Block Scope: Variables defined with let and const are limited to the block they are declared in, like loops or conditionals.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
}
  
const myFunc = makeFunc();
myFunc();

//   functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.