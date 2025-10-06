document.getElementById("btn").addEventListener("click",function(){
    let count=document.getElementById("count");
    count.innerText=Number(count.innerText)+1;
},true);

const output = document.querySelector("#output");
function handleClick(e) {
    console.log('handleClick');
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick,true);

const button = container.querySelector("button");
button.addEventListener("click", function(e) {
  console.log('button clicked');
  console.log('2');
console.log('3');
setTimeout(() => {
    console.log('4');       
},122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222220);
console.log('5');
});

const a = document.querySelector("a");
// a.addEventListener("click", function(e) {
//   console.log(e);
// });