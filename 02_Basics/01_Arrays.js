//Array

let myArr=[0,1,2,3,4,5]

// console.log(myArr);
// console.log(myArr[2]);



let myArr1=[0,1,2,3,4,5,"Vishu"]
// console.log(myArr1);

let myArr2=new Array(0,1,2,3,4)
// console.log(myArr2);



//Arrays Methods

myArr.push(6)     //push
// console.log(myArr);


myArr.pop()     //pop
// console.log(myArr);


myArr.unshift(6)      //Unshift is used to add the value and begining
// console.log(myArr);


myArr.shift()      //Shift is used to dlt the value form beginging
// console.log(myArr);

let newArray= myArr.join()  //Converts into String
// console.log(newArray);
// console.log(typeof newArray);

console.log();
console.log("Slice");        //Returns the values inside the indexes Provided and last Argument is not included
let mya1= myArr.slice(1,3)
console.log(myArr);
console.log(mya1);

console.log();
console.log();


console.log("Splice");         //Returns the values inside the indexes Provided and last Argument is included 
let mya2= myArr.splice(1,3)    //and the values returned are deleted from original Arrays
console.log(myArr);
console.log(mya2);


 

