let Score="33"


let valueNumber=Number(Score)
// console.log(typeof Score);
// console.log(typeof valueNumber)   //Here the string Value 33 can be converted in the Number format
                                  // " 33 " => 33



let Me="33n"
let valueMe=Number(Me)
// console.log(typeof valueMe)
// console.log(valueMe)              //NAN as in ValueMe there is 33n in string that is not convertable in string
                                  //" 33n " => NAN


let Me1=null
let valueMe1=Number(Me1)
// console.log(typeof valueMe1);
// console.log(valueMe1);            //When converting Null into Number the Value to be Assigned will be 0
                                  // nul => 0


let Me2=undefined
let valueMe2=Number(Me2)
// console.log(typeof valueMe2);
// console.log(valueMe2);           //NAN as Me2 holds undefined that cannot be converted int Number
                                 // undefined => NAN



let Me3=true
let valueMe3=Number(Me3)
// console.log(typeof valueMe3);
// console.log(valueMe3);          //if true than 1 and if false then 0
                                // true => 1    false =>0
