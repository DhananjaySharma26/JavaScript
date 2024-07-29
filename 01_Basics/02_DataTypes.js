"Use Strict"      // treat all JS Code as a newer Version

// alert(3+3)       //We Are using node.js, not Browser

let name ='Vishu'
let Age= 21

let Me

let Me1=null       


// Primitive

/*String
Number(2 to the power 53),
bigInt, 
boolean ,
null= Stand Alone Value, 
undefined = Value not Assigned, 
Symbol = Uniqueness*/


// Non-Premetive
// Array, object, Function

console.log(typeof(name))      //Type is String
console.log(typeof(Me))        //Undefined is the type
console.log(typeof(Me1))       //The type of Null is Object


const id=Symbol('123')
const id1=Symbol('123')
console.log();
console.log(id === id1);



//Array

let heros=["Shaktiman", "Naagraj", "Doga"]

//Object
let Obj1= {
    name: "Vishu",
    Age: 21,

}

//Function

let myFunction= function(){
    console.log("hello World")
}

console.log();
console.log();
console.log(typeof heros);
console.log(typeof Obj1);
console.log(typeof myFunction);