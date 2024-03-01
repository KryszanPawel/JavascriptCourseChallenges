const todoList = document.querySelector("#todo-list");
const formInput = document.querySelector("input");
const formBtn = document.querySelector("button");

formBtn.addEventListener("click", postNewItem);

getTodos();

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        createLiElement(element.title, element.completed);
      })
    );
}

function postNewItem(e) {
  e.preventDefault();
  postOptions = {
    method: "POST",
    body: JSON.stringify({ title: formInput.value, completed: false }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://jsonplaceholder.typicode.com/todos", postOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
  createLiElement(formInput.value, false);
  formInput.value = "";
}

function createLiElement(title, completed) {
  const li = document.createElement("li");
  li.textContent = title;
  completed ? li.classList.add("done") : null;
  todoList.appendChild(li);
}

function changeStatus() {}
