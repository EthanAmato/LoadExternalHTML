function myDisplayer(html) {
  let myDemoDiv = document.querySelector("#toDoList");
  myDemoDiv.innerHTML = html;
}

function loadToDos(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((data) => {
      callback(data);
    });
}

let myLoadButton = document.querySelector("#load");
let myClearButton = document.querySelector("#clear");

myLoadButton.addEventListener("click", () => loadToDos(myDisplayer));
myClearButton.addEventListener("click", () => myDisplayer(""))