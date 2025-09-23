console.log(sum(10,5));
console.log(subtract(10,5));
// console.log(multiply(10,5));
// console.log(divide(10,5));
console.log(a);

function sum(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}



var multiply = function(num1,num2) {
    return num1 * num2;
}

var divide = (num1,num2) => {
    return num1 / num2;
}

var a=20;



// function greet(name) {
//     console.log("Hello, " + name);
//     function checkStatus(age) {
//         if (age >= 18) {
//             console.log(name + " is an adult.");
//         } else {
//             console.log(name + " is a minor.");
//         }
//     }
//     checkStatus(20);
// }

// greet("Alice");
