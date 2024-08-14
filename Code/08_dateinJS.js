// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects encapsulate an integral number that represents milliseconds since the midnight 
// at the beginning of January 1, 1970, UTC 

let myDate = new Date();
// console.log(myDate) //2024-08-14T14:49:14.804Z -> not understable 
// console.log(myDate.toString()); //Wed Aug 14 2024 14:49:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Wed Aug 14 2024
// console.log(myDate.toISOString());//2024-08-14T14:51:35.105Z
// console.log(myDate.toLocaleDateString()); //8/14/2024
// console.log(myDate.toLocaleString()); //8/14/2024, 2:51:35 PM
// console.log(myDate.toLocaleTimeString());//2:51:35 PM
// console.log(myDate.toTimeString());//14:51:35 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myDate); //object-> IMP

let newDate = new Date(2024, 0, 12); //YYYY, MM, DD
// console.log(newDate.toDateString()); //Fri Jan 12 2024 -> months start from 0 
newDate = new Date(2024, 5, 21, 5,7,54);
// console.log(newDate.toString()); Fri Jun 21 2024 05:07:54 GMT+0000
newDate = new Date("2024-12-23") //yyyy-mm-dd
// console.log(newDate.toDateString()); Mon Dec 23 2024

newDate = new Date("12-24-2024") // mm-dd-yyyy
// console.log(newDate.toDateString()); Tue Dec 24 2024

// console.log(newDate.getDate());//24
// console.log(newDate.getDay());//2 ->counting from monday

let myTimestamp = Date.now()
console.log(myTimestamp); //1723647790897 -> in milliseconds 
// console.log(Math.floor(myTimestamp/1000)); 1723647862-> in seconds

let createdDate = new Date();
console.log(createdDate.getDate()); //14
console.log(createdDate.getMonth() + 1); //do +1 bcz month start from 0 

//more customisation in date

createdDate.toLocaleString("default", {
    weekday : "long",
    timeZone: "default"
})



















