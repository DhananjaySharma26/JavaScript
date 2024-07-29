let s1="Vishu "
let repoCount=3

// console.log(s1+repoCount);


console.log(`My Name is ${s1}and my repo Count is ${repoCount}`);    //Backtics(``). for string interpolation


let GameName= new String("Vishu FC")       //Store as a Object
console.log(GameName);
console.log(GameName[1]);



console.log(`Lemgth = ${GameName.length}`);
console.log(`In UpperCase = ${GameName.toUpperCase()}`);
console.log(`${GameName.charAt(6)}`);



let newString= GameName.substring(0,4)
console.log(`${newString}`);

let SplittingString= 'Vishu Sharma is a good boy'
console.log(SplittingString.split(' '))