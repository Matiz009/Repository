// console.log("OOP file");

// const car={
//     name:"BMW",
//     model:"2020",
//     color:"Black",
//     changeGear:function(gear){
//         console.log("Gear changed to "+gear);
//     },
//     calculateArea:function(radius){
//         return Math.PI*radius*radius;
//     }
// }

// const car3={
//     name:"BMW",
//     model:"2020",
//     color:"Black",
//     changeGear:function(gear){
//         console.log("Gear changed to "+gear);
//     },
//     calculateArea:function(radius){
//         return Math.PI*radius*radius;
//     }
// }

// const audi =Object.create(car);
// const bmw =Object.create(car);
// const mercedes =Object.create(car3);
// mercedes.changeSpeed=function(speed){
//     console.log("Speed changed to "+speed*2);
// }
// bmw.changeSpeed=function(speed){
//     console.log("Speed changed to "+speed*3);
// }
// audi.changeSpeed=function(speed){
//     console.log("Speed changed to "+speed);
// }

// console.log(audi);

// audi.name="Audi";
// audi.model="2021";
// audi.color="White";

// console.log(audi);


function test(){
    console.log("Test function");
    let a=10;
    let b=20;
    console.log(a+b);
    function inner(){
        a=45;
        console.log("Inner function");
        console.log("Inner a: "+a);
    }
    inner();
    console.log("Outer a: "+a);
}

test();