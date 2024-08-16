// ******************Some More Array Methods***************************************888

const house_targareyn = ["Daenerys", "Aemond", "Rhaenyra"]
const house_stark = ["Ned", "Rob", "Arya"]

// house_targareyn.push(house_stark) ->makes changes in original array  only 
// console.log(house_targareyn); //[ 'Daenerys', 'Aemond', 'Rhaenyra', [ 'Ned', 'Rob', 'Arya' ] ]
//here arr2 is considered an element in arr1 
// console.log(house_targareyn[3][1]); //rob

//concat->Combines two or more arrays. This method returns a new array 
// without modifying any existing arrays.
const newArr = house_targareyn.concat(house_stark)
// console.log(newArr); //[ 'Daenerys', 'Aemond', 'Rhaenyra', 'Ned', 'Rob', 'Arya' ]

//preferred method 
// SPREAD -> Spread syntax can be used when all elements from an object or array 
// need to be included in a new array or object, or should be applied 
// one-by-one in a function call's arguments list.

const combineHouses = [...house_targareyn, ...house_stark] //
// console.log(combineHouses);//[ 'Daenerys', 'Aemond', 'Rhaenyra', 'Ned', 'Rob', 'Arya' ]

//FLAT() -> The flat() method of Array instances creates a new array with all 
// sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [1,2,3,4,[8,9,10], [12,13,[34,56,78]]]
// console.log(arr1.flat(Infinity)); //[ 1,  2,  3,  4,  8, 9, 10, 12, 13, 34,56, 78 ]
//need to specify The maximum recursion depth
//Returns a new array with all sub-array elements concatenated into it recursively 
// up to the specified depth.

console.log(Array.isArray("Aditya")); //false
//FROM->The Array.from() static method creates a new, shallow-copied Array 
// instance from an iterable or array-like object. IF NOT , RETURNS EMPTY ARRAY
console.log(Array.from("Aditya")); //[ 'A', 'd', 'i', 't', 'y', 'a' ]
console.log(Array.from({name : "Aditya"})); //[] ->returned empty //REMEMBER

let score1 = 90
let score2 = 80
let score3 = 889
 //of() ->Returns a new array from a set of elements
console.log(Array.of(score1, score2,score3)); //[ 90, 80, 889 ]








