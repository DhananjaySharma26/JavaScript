console.log();

function myName(){
    console.log("hello World");
}


console.log(myName());
console.log();
console.log();



function SumTwoNumbers(n1,n2){

    console.log(n1+n2);
}

console.log(SumTwoNumbers(1,2));        
console.log(SumTwoNumbers(1,"2"));        //it add these as number and string

console.log(SumTwoNumbers(1,"a"));  

console.log(SumTwoNumbers(1,null));       

console.log();
console.log();
function SumTwoNumbers2(n1,n2){
    return n1+n2
}


const result=SumTwoNumbers2(1,2)

console.log(result);