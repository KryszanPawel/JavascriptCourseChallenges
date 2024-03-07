const todoList = document.querySelector("#todo-list");
const formInput = document.querySelector("input");
const formBtn = document.querySelector("button");

formBtn.addEventListener("click", postNewItem);
todoList.addEventListener("click", changeStatus);
const todos = [];

getTodos();

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        todos.push(element);
        createLiElement(element.title, element.completed);
      })
    );
}

function postNewItem(e) {
  e.preventDefault();
  const postOptions = {
    method: "POST",
    body: JSON.stringify({ title: formInput.value, completed: false }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://jsonplaceholder.typicode.com/todos", postOptions)
    .then((response) => response.json())
    .then((data) => {
      todos.push(data);
    });
  createLiElement(formInput.value, false);
  formInput.value = "";
}

function createLiElement(title, completed) {
  const li = document.createElement("li");
  li.textContent = title;
  completed ? li.classList.add("done") : null;
  todoList.appendChild(li);
}

function changeStatus(e) {
  if (e.target.tagName === "LI") {
    const element = todos.filter(
      (element) => element.title === e.target.textContent
    )[0];
    const patchOptions = {
      method: "PATCH",
      body: JSON.stringify({ completed: !element.completed }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      `https://jsonplaceholder.typicode.com/todos/${element.id}`,
      patchOptions
    )
      .then((response) => response.json())
      .then((data) => data);
  }
  todos.map((element) => {
    if (element.title === e.target.textContent) {
      element.completed = !element.completed;
    }
  });
  e.target.classList.toggle("done");
}
