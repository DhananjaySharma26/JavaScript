//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());

console.log(typeof myDate);


// let personalDate=new Date(yy, mm index, dd)
let personalDate=new Date(2024, 1,26)
console.log(personalDate.toDateString());

let timeDate=new Date(2024, 1,26, 5,3,20,40)
console.log(timeDate.toLocaleString());

// let currentDate= new Date(mm-dd-yy)
let currentDate=new Date("02-26-2024")
console.log(currentDate.toDateString())