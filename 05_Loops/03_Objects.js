const myObj={

    js: "JavaScript",
    cpp: "C++",
    rb: "ruby"
}




//for in loop
//In for in loop only he keys are rturned by the loop where in for of loop it privdes key as well as Values

for (const key in myObj) {
    console.log(key,':- ',myObj[key]);
    
}
console.log();

const arr=["js","ruby","Java","Python"]
for (const key in arr) {
    console.log(key);
    
}
console.log();


const newMap=new Map()
newMap.set('IN','India')
newMap.set('USA','United States of Amarica')
newMap.set('FR','France')

for (const key in newMap) {     //these map are not iterable
    console.log(key);
}




//for Each loop
const coding=["Java", "Python", "C++"]

coding.forEach( function(item){
    console.log(item);
    
})
console.log();

coding.forEach( (item)=>{
    console.log(item);
    
})


console.log();

coding.forEach( (item,index,arr)=>{
    console.log(item, index, arr);
    
})


console.log();

const mycoding=[
    {
        Language: "Javascript",
        LanguageFileName:"JS"
    },
    {
        Language: "C++",
        LanguageFileName:"CPP"
    },
    {
        Language: "JAVA",
        LanguageFileName:"java"
    }
]

mycoding.forEach( (item)=>{
    console.log(item.Language);
    
})