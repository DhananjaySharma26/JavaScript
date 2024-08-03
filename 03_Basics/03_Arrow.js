
const user={
    username: "Vishu",
    price: 999,

    welcome: function(){
        console.log(`${this.username} ,Welcome to Website`);
        console.log(this);     //It Provide the current Object
        
    }
}


// user.welcome()

// user.username= "Dhananjay Sharma"
// user.welcome()

// console.log(this);     //Gives the Empty object as there is no global Object


function chai(){
    console.log(this);
}

// chai()



//Arrow Function    ()=>{}
const Coffee=()=>{
    console.log(this);
    
}
// Coffee() 


const addTwo=(n1,n2)=>{
    return n1+n2
}

console.log(addTwo(2,3));


const addThree=(n1,n2,n3)=> n1+n2+n3
console.log(addThree(2,3,4));


// const addTwo=(n1,n2)=> (n1+n2)      //If we need write this code in parebthisis then you need to use return Statement




