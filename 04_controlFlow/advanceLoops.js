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

console.log(userQuery);
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




