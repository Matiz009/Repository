// let count=document.getElementById("count");
// let btn=document.getElementById("btn");


// btn.addEventListener("click",add);

// function add(){
//     count.innerText=Number(count.innerText)+1;
// }

// const para=document.getElementById("p");
// console.log('innerText '+para.innerText);
// console.log('innerHtml '+para.innerHTML);
// console.log('outer '+para.outerHTML);
// console.log('text content '+para.textContent);

// const bd=document.getElementById("bd");
// console.log(bd.childNodes);
// console.log(bd.children);
// console.log(bd);
// const ArrayChild=Array.from(bd.children);
// ArrayChild[4].style.backgroundColor="Blue";

// bd.style.display="none";


// const doc = Array.from(document.body.children);
// doc.forEach(d => {
//     console.log(d);
// });

// const list = document.getElementsByClassName("list-item");
// console.log(list);

// const listArr = Array.from(list);
// listArr.forEach((l, i) => {
//     l.innerText = `item ${i + 1}`;
//     l.style.backgroundColor = "coral";
//     l.style.color = "beige";
// });


// const elements = document.querySelectorAll('li');
// let index=0;
// elements.forEach((e)=>{
// if(e.innerText==="Banana"){
//     index = Array.from(elements).indexOf(e);
//     return;
// }
// })

// console.log(elements.innerText);

// elements[index].style.backgroundColor="yellow";
// console.log(window);
// console.log(document);
// console.log(history);
// console.log(navigator);
// console.log(screen);


const list = document.getElementById("myList");
const child=document.querySelector("li:nth-child(1)");
child.textContent="Pineapple";

const newLi= document.querySelectorAll("li");

const newItem = document.createElement("li");
console.log(newItem.nextSibling);
newItem.textContent = "Mango";
newItem.style.backgroundColor="yellow";
newItem.style.color="white";
list.appendChild(newItem);

console.log(newItem.nextSibling);