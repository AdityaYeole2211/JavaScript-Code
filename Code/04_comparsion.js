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





