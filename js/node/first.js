// console.log("First file");
// console.log("Hello World");

// function add(a,b){
//     return a+b;
// }

// console.log(add(10,20));


const os = require('os');


// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());


console.log(os.freemem()/1024/1024/1024);

console.log(os.totalmem()/1024/1024/1024);

console.log(os.homedir());

console.log(os.uptime()/60/60);

console.log(os.userInfo());

console.log(os);