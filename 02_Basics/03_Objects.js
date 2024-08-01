//Singleton

//Boject Literals


const Jsuser={
    name:"Vishu",
    age:21,
    email:"vishu.mpsharma2020@gmail.com",
    myArr:["Vishu","Sharma"]
}

console.log(Jsuser);

// console.log(`Name = ${Jsuser.name}`);
// console.log(`age = ${Jsuser.age}`);
// console.log(`email = ${Jsuser.email}`);
// console.log(`myArr = ${Jsuser.myArr}`);

console.log();
console.log();
//Another way to access elements which are in object
// console.log(`Name = ${Jsuser["name"]}`);   //Name is written in string as it holds string value this is same 
// console.log(`age = ${Jsuser.age}`);        //as in emai and myArr
// console.log(`email = ${Jsuser["email"]}`);
// console.log(`myArr = ${Jsuser["myArr"]}`);


// Object.freeze(Jsuser).     //it will freeze the Pbject and we canot change the values of the elements
Jsuser.email="vishu.mpsharma2023@gmail.com"


Jsuser.greeting= function(){         //Add function in an Object
    console.log(`Hello JS User your email is ${this.email}`);
}
console.log(Jsuser);
console.log();

console.log(Jsuser.greeting());









