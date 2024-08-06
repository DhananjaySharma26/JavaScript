//While


let myarr=["Vishu", "Sharma", "Dhananjay"]
let i=0
while (i<myarr.length) {
    
    if (myarr[i]=="Dhananjay") {
        // console.log(i);
    }
    i++
}




//Do-While
i=0
do {
    // console.log(myarr[i]);
    i++
} while (i<myarr.length);


//for of loop

const arr=[1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
}

const greeting = "Hello Every One"
for (const greet of greeting) {
    // console.log(greet);
}



//Maps    stores in sequence and unique no duplicacy


const newMap=new Map()
// newMap.set('Key','Value')

newMap.set('IN','India')
newMap.set('USA','United States of Amarica')
newMap.set('FR','France')

console.log(newMap);


for (const Key of newMap) {
    console.log(Key);
}

console.log();


for (const [Key, Value] of newMap) {
    console.log(Key,':- Value');
    
}

console.log();


const obj={
    Game1: "NFS",
    Game2: "GTA",
    Game3: "CS"
}


for (const Game of obj) {
    console.log(Game);
    
}