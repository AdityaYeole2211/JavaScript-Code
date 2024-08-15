//Arrays ->
/*In JavaScript, arrays aren't primitives but are instead Array objects 
with the following core characteristics:
1. JavaScript arrays are resizable and can contain a mix of different data types. 
2. JavaScript arrays are not associative arrays and so, 
array elements cannot be accessed using arbitrary strings as indexes.
3. JavaScript arrays are zero-indexed.
4. JavaScript array-copy operations create shallow copies.
5. A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object 
from which the copy was made.
6. A deep copy of an object is a copy whose properties do not share the same
 references (point to the same underlying values)
  as those of the source object from which the copy was made.*/

//declaring arrays 
let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,"Aditya", true]
let arr3 = new Array(1,2,34,true,false)

// console.log(arr1[0]);//1
// console.log(arr3.length);//5

/////Arrays Methods
arr1.push(8)
arr2.push(9)
// console.log(arr1); //[ 1, 2, 3, 4, 5, 8 ]
arr2.pop()
// console.log(arr2); //[ 1, 2, 3, 'Aditya', true ]

arr1.unshift(99) //[
//     99, 1, 2, 3,
//      4, 5, 8
//   ]
//Inludes ellement in the start , not recommended as need to shift entire array 
// console.log(arr1);

arr1.shift() //to delete from start , same problem
// console.log(arr1); //[ 1, 2, 3, 4, 5, 8 ]

// console.log(arr1.includes(99)); //false 
// console.log(arr1.indexOf(99));//-1
// console.log(arr1.indexOf(3));//2

// let arr4 = arr1.join() //return the array as string
// console.log(arr1); //[ 1, 2, 3, 4, 5, 8 ]
// console.log(arr4); //1,2,3,4,5,8

//IMP -> SLICE ,SPLICE 
let newArr = arr1.slice(1,3) 
console.log("slice output:    " +  newArr ); //2,3

console.log("orginial array after slice : " + arr1); //1,2,3,4,5,8

let newArr2 = arr1.splice(1,3)
console.log("splice output:   " + newArr2 ); //2,3,4

console.log("orginial array after splice : " + arr1); //1,5,8


//Note : 
//Difference between slice and splice 
// slice : first index inluded in range but last not , also orginal array remains same 
//splice : both index oncludes in range , but removes that part from orginal array 















