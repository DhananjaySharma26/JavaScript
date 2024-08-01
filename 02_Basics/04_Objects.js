// const tinderuser =new Object()  //Singleton Object

const tinderuser1={}          //Non Singleton Object
console.log(tinderuser1);

tinderuser1.id= "123abc"
tinderuser1.name=" Samay"
tinderuser1.Loggin= false

console.log(tinderuser1);
console.log();
console.log(Object.keys(tinderuser1));
console.log(Object.values(tinderuser1));




const regularUser={
    email: "Visu.mpsharma2020@gmail.com",
    fullName:{                              //Nested Object
        UserFullName:{
            firstName:"Vishu",
            LastName:"Sharma"
        }
    }
}

console.log(regularUser.fullName.UserFullName.firstName);
console.log(regularUser.fullName.UserFullName.LastName);

console.log();
console.log();


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2)     //Combine two Objects

const obj3={...obj1,...obj2}     //Spread Operator.  most simple and easy

console.log(obj3);