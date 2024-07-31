//important

const myArr=["Vishu", "Sharma" , "Arpit"]
const myArr1=["Rishabh", "Priya" , "Rishu"]


console.log();
myArr.push(myArr1)      //it adds the whole Array as an Element in the given Array

// console.log(myArr);

const myArr2=["Vishu", "Sharma" , "Arpit"]

const myArr3=myArr2.concat(myArr1)     //Concate adds the provided array Elements in given array Element
// console.log(myArr3);
// console.log();
// console.log();


const myArr4=[...myArr2,...myArr3]     //Spread is used when we need to add the two Arrays in one new Array
// console.log(myArr4);


console.log(Array.from("Vishu Sharma"));    //Converts the given into Array
console.log(Array.of(1,2,3,4))       //Converts the given elements into Array

console.log();