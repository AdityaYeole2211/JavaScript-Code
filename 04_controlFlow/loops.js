//SOME ADDITIONAL LOOPS 
//1. FOR OF LOOP: 

// syntax:
// for (const element of object) {
    
// }
//note: object here does not reperesnt oop object , it is just a iterable data structure

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

// iterable on maps also
const map = new Map()
map.set("IN", "INDIA")
map.set("FR", "FRANCE")
map.set("UK", "UNITED KINGDOM")

for (const keys of map) {
    // console.log(keys);
    
}
/*[ 'IN', 'INDIA' ]
[ 'FR', 'FRANCE' ]
[ 'UK', 'UNITED KINGDOM' ]*/ //givess entire map 

//do destructuring 
for (const [key,val] of map) {
    // console.log(`key is ${key} and val is ${val}`);
    
}
/*key is IN and val is INDIA
key is FR and val is FRANCE
key is UK and val is UNITED KINGDOM*/

    // VVVVIMP NOTE: NOT ITERABLE ON OBJECTS
const myobj = {
    name : "Aditya",
    age: 21
}

// for (const [key,val] of myobj) {
    // console.log(key + "->"+ val);
    
// }//TypeError: myobj is not iterable


//2-> For in LOOP-> RETURNS KEY OF THE ITERABLE


for (const key in myobj) {
    // console.log(myobj[key]);
    
}
//Aditya
// 21

const newArr = ["c++", "java","rb", "py"]
for (const num in newArr) {
    // console.log(num);
       
}
// gives index - > 0,1,2,3
//for vaLUES: 
for (const num in newArr) {
    // console.log(newArr[num]);
    
   
}
//NOTE: NOT ITERABLE ON MAPS

//3. FOR EACH :  MEMBER FUNCTION OF ARR
const coding = ["c++", "java", "python"]

// coding.forEach( function(item){
//     console.log(item);
    
// } )

//can write arrow fn also
// coding.forEach((val)=>{console.log(val);
// })

//can pass other fucntion also 
function printme(item){
    console.log(item);
    
}
// coding.forEach(printme)

//has 3 return values -> item, index, arr
coding.forEach((item, index, arr)=>{
    console.log(item + " " + index + " "+ arr);
    
})
/*
c++ 0 c++,java,python
java 1 c++,java,python
python 2 c++,java,python
*/

//most used for iterating arr of objects
const asalm = [
    {
       name: "Aditya",
       age: 21
    },
    {
       name: "yo",
       age: 22
    },
    {
       name: "yoyo",
       age: 31
    }
]

asalm.forEach((item)=>{
    console.log(item.name);
    
})

