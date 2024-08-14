/*BASIC CONVERSION*/
// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2<=1);


//console.log("2" > 1); //true 
//console.log("02" > 1);//true 
//converts string to number and compares 

// console.log(null < 0); //false 
// console.log(null > 0);//false
// console.log(null == 0);false
// console.log(null >= 0);true 
// console.log(null <= 0);true 

//EXPLANATION : 
// console.log(null == 0); // false
// Explanation: The == operator (loose equality) performs type coercion. 
// However, null is only loosely equal to undefined and not to other values. 
// So null == 0 is false because null does not coerce to 0.
// 4. console.log(null >= 0); // true
// Explanation: The >= operator checks if the value on the left is greater than or equal 
// to the value on the right. JavaScript converts null to 0 and 
// checks if 0 >= 0, which is true.
// 5. console.log(null <= 0); // true
// Explanation: The <= operator checks if the value on the left is less than or equal 
// to the value on the right. Similar to >=, 
// JavaScript converts null to 0 and checks if 0 <= 0, which is true.

// console.log(undefined > 0); false
// console.log(undefined < 0);false
// console.log(undefined == 0);false
// console.log(undefined >= 0);false
// console.log(undefined <= 0);false

//THE REASON IS THAT THE EQUALITY CHECK (==) AND COMPARSION (>,<,>=,<=) WORK DIFFERNETLY
//COMPARISON CONVERTS NULL TO 0 TREATING IT AS NUMBER THAT IS WHY >= RETURN TRUE!!

//BAD PRACTICE TO USE THIS TYPE OF CONVERSION AS THEIR RESULTS MAY NOT BE THE SAME IN EVRY SITUATION

//STRICT EQUIVALENCE CHECK ->CHECKS VALUE AS WELL AS DATATYPE
console.log("2" === 2); //false





