

// (function sum(a,b){
//    console.log(a+b);
// })(2,3);

// (()=>{
//     console.log("IIFE");
// })();

// (()=>{
//     console.log("IIFE 2");
// })();



const a=12;
const b=5;
function multiply(x,y){
    
}

function divide(x,y){
    return x/y;
}

function add(x,y){
   multiply(x,y);
   divide(x,y);
    return x+y;
}

add(10,5);