// const Car={
//     color:"red",
//     engines:"4",
//     driver:"Ali",
//     model:"2020",
//     start: function(){
//         console.log("car started");
//     },
//     stop: function(){
//         console.log("car stopped");
//     },
//    // "is new": true
   
//    "is working": true,
   

// }

// const Person=new Object();

// Person.name="John";
// Person.age=30;
// Object.freeze(Person);
// Person.greet=function(){
//     console.log("Hello, "+this.name);
// }
// console.log(Person);
// console.log(Person.name);
// console.log(Person["age"]);
// console.log(Person.greet());

// console.log(Car.start());
// console.log(Car["is working"]);

const test="test";
const obj1={
    apple:1,
    ball:2,
    c:3,
    d:function(){
        return test;
    }
};

const obj2={
    a:1,
    b:2,
    c:3,
    d:function(){
        return test;
    }
};

const obj3={...obj1,...obj2};

console.log(obj1.d());
console.log(obj3);

//object destructuring
const {apple:a,ball:b}=obj1;
console.log(a,b);


const Student={
    name:"Ali",
    age:20,
    marksinfsc:450,
    marksinmat:400,
    marksineng:350,
    totalmarks:function(){  
        return this.marksinfsc+this.marksinmat+this.marksineng;
    },

}

const {name,age,marksinfsc:m,marksinmat:n,marksineng:o,totalmarks}=Student;
console.log(name,age,m,n,o,totalmarks());