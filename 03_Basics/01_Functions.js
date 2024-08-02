console.log();

function myName(){
    console.log("hello World");
}


// console.log(myName());
// console.log();
// console.log();



function SumTwoNumbers(n1,n2){

    // console.log(n1+n2);
}

// console.log(SumTwoNumbers(1,2));        
// console.log(SumTwoNumbers(1,"2"));        //it add these as number and string

// console.log(SumTwoNumbers(1,"a"));  

// console.log(SumTwoNumbers(1,null));       

// console.log();
// console.log();
function SumTwoNumbers2(n1,n2){
    return n1+n2
}


const result=SumTwoNumbers2(1,2)

// console.log(result);


//Rest Operator or Spread Operator  or Var Args

function CalculateCartPrice(...n1){
    return n1
}



// console.log(CalculateCartPrice(20, 100, 200));



const user={
    username: "Vishu",
    Price:199
}

function handleObject(anyobject){
    console.log(`Username= ${anyobject.username}  Price= ${anyobject.Price}`);
    
}



handleObject(user)


handleObject({           //In this way we also can pass the Object as Argument
    username: "Vishu",
    Price:199
})



const myArr=[100, 200, 300]


function SecondValue(myArr){
    console.log(myArr[1]);
}

SecondValue(myArr)

