//IIFE is used when we need not to Polute  from Global Scope and it should execute Immediatly

(function chai(){      //named IIFE
    console.log("Connected");
    
})
();

((Name)=>{             //UnNamed IIFE
    console.log(`Name: ${Name}`);
})
("Vishu");

