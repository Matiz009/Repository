// const number_entered_by_user=12345;

// function callback(num){
//     console.log("User data: ",num);
// }

// function falseEx(){
//     console.log("User not found");
// }

// function getUser(a,b,c){
    
//     if(c){
//        a();
//     }else{
//          b();
//     }
    
// }


// getUser(callback, falseEx,number_entered_by_user);

// const number1 =Math.floor(Math.random()*10000000000000000000000000000); 
// function getUser(id, callback) { 
//     setTimeout(function () { 
//       //  console.log("Reading User");
//          callback({ id: id, name: "Usman" });
// },
// number1)
// }
// console.log(number1)
// for(let i=0;i<100;i++){
//     getUser(123, function (user) {
//     console.log("User:", user);
// });
// }





// doSomething()
// .then((result) => {
// console.log("Promise resolved with data:", result);
// })
// .catch((error) => {
// console.error("An error occurred:", error);
// })
// .finally(() => {
// console.log("Promise chain completed"); // This block will execute regardless of success or failure
// });

// const p = new Promise(function(resolve,reject){
//  if (true) resolve({name:"hareem"});
// else reject(new Error("No data found"));
// });
// p.then((result)=>{
// console.log(result.name);
// }).then(()=>{console.log("Promise Resolved")});
// p.catch((error)=>{console.log("Error Caught"+error.message)})
// .finally(()=>{console.log("Promise Completed")});


async function fetchData() {
    const uri='https://jsonplaceholder.typicode.com/users';
    try{
        const res=await fetch(uri);
        const data=await res.json();
        return data;

    }catch(error){
        console.error("Error fetching data:", error);
    }
}


fetchData()
  .then(data => {
    console.log("Fetched data:", data);

    const table = document.getElementById('table');
    if (!table) {
      console.error("No element with ID 'table' found.");
      return;
    }

    // Validate it’s actually an array
    if (!Array.isArray(data) || data.length === 0) {
      table.innerHTML = `<p>No data to display 😅</p>`;
      return;
    }

    // Create table headers dynamically
    const headers = Object.keys(data[0]);
    const thead = `
      <thead>
        <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
      </thead>
    `;

    // Create table rows
    const tbody = `
      <tbody>
        ${data.map(row => `
          <tr>${headers.map(h => `<td>${row[h]}</td>`).join('')}</tr>
        `).join('')}
      </tbody>
    `;

    // Put it all together
    table.innerHTML = `<table border="1">${thead}${tbody}</table>`;
  })
  .catch(error => {
    console.error("Error in fetchData:", error);
  });
