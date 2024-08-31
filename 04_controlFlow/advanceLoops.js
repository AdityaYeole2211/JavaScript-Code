const coding = ["js", "py", "rb"]

let values = coding.forEach((item)=> {return item})
// console.log(values); //undefined 
//NOTE THAT FOREACH DOES NOT RETURN ANY VALUE 
//BUT MANY TIMES  WE DONT WANT TO PRINT ITEM
//WE WANT TO  DO SOME OPS ON ITEM AND RETURN IT 
//FOR IT FILTER() CAN BE USED -> it returns  values 

values = coding.filter((item)=> item)
// console.log(values); //[ 'js', 'py', 'rb' ]

const nums = [1,2,3,4,5,6,7,8,9]
const newVals = nums.filter((item)=>{
    return item > 4 && item%2 == 0
})

// console.log(newVals); //[6,8]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userQuery = books.filter((bk)=>{return bk.genre === "History"})
// console.log(userQuery);
/*[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]*/

userQuery = books.filter((bk) => {
    return bk.publish > 2000 && bk.genre === "Science"
})

// console.log(userQuery);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
  */


//MAP METHOD: use  to do ops 
const arr1 = [1,2,3,4,5,6]
const arr2 = arr1.map((num)=> num + 10)
console.log(arr2); //[ 11, 12, 13, 14, 15, 16 ]

//Chaining 
const arr3 = arr2.filter((num)=>num > 12).map((nums)=>nums+2).filter((nums)=> nums%2 == 0)
console.log(arr3);//[ 16, 18 ]
// first filter => 13,14,15,16
//second map=> 15,16,17,18
//third fileter=>16,18


//REDUCE -> USED TO ADD VALUES OF ARR TO A PARTICULAR INITIAL VALUE

const arr4 = [2,4,6,8]

const total = arr4.reduce(function(acc, currVal){
  console.log(`accu: ${acc} , currVal : ${currVal}`);
  return acc + currVal
  
}, 0)
//0->inintial value
console.log(total);
/*accu: 0 , currVal : 2
accu: 2 , currVal : 4
accu: 6 , currVal : 6
accu: 12 , currVal : 8
20*/

const shoppingCart = [
  {
    courseName : "js-course",
    price: 1999
  },
  {
    courseName : "py-course",
    price: 199
  },
  {
    courseName : "mobdev-course",
    price: 200
  },
  {
    courseName : "java-course",
    price: 19
  }
]

const toPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(toPay);

//2417

let strArray = ['s', 'a', 'm', 'm', 'y']

const stringNew = strArray.reduce((acc, currVal) => acc + currVal, '')
console.log(stringNew); //sammy

//difference between filter , reduce and map 
//FILTER : 
/*
The filter() method of Array instances creates a shallow copy of a portion 
of a given array, filtered down to just the elements from the given array 
that pass the test implemented by the provided function.
The function is called with the following arguments:

element: The current element being processed in the array.

index: The index of the current element being processed in the array.

array: The array filter() was called upon.
*/

//MAP : 
/*
The map() method of Array instances creates a new array 
populated with the results of calling a provided function on every element 
in the calling array.
SAME ARGUMENTS
*/

//REDUCE: 
/*
The reduce() method of Array instances executes a user-supplied "reducer" 
callback function on each element of the array, in order, passing in the 
return value from the calculation on the preceding element. The final result 
of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the 
previous calculation". If supplied, an initial value may be used in its place. 
Otherwise the array element at index 0 is used as the initial value and 
iteration starts from the next element (index 1 instead of index 0).

The function is called with the following arguments:

accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

array
The array reduce() was called upon.
*/










