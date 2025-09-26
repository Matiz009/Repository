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

// bd.style.display="none";


// const doc = Array.from(document.body.children);
// doc.forEach(d => {
//     console.log(d);
// });

const list = document.getElementsByClassName("list-item");
console.log(list);

const listArr = Array.from(list);
listArr.forEach((l, i) => {
    l.innerText = `item ${i + 1}`;
    l.style.backgroundColor = "coral";
    l.style.color = "beige";
});


