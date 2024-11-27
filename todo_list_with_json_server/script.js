export const URL = "http://localhost:3000/todos";

console.log(process.env.URL);
// importing the modules
import {
  removeTodoFromServer,
  removeTodoFromDOM,
} from "./modules/removeTodo.js";
import showTask from "./modules/showTask.js";
import sortFn from "./modules/sortFn.js";
import addTodo from "./modules/addTodo.js";
import saveData from "./modules/saveData.js";
import { dragAndDrop } from "./modules/dragAndDrop.js";

// Select the require elements
const container = document.querySelector(".container");
const inputTodo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
let delTodoBtns = document.querySelectorAll(".del-todo");
let inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
const sortBtn = document.querySelector("#sort-by");
const modalWindow = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#close-modal");
const addTodoBtn = document.querySelector("#add-todo");

//This will be used while sorting the todo list
let todosHTML;
let newTodo;

// Initial todo list value
let todoList = await fetch(`${URL}`);
todoList = await todoList.json();

// Load the todo list from the json server
showTask(todoList);
update();
dragAndDrop();

// Modal window
addBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("show-modal");
  inputTodo.focus();
  container.classList.add("blur");
});

// Close the modal window
closeModalBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("show-modal");
  container.classList.remove("blur");
});

addTodoBtn.addEventListener("click", () => {
  [todoList, todosHTML, newTodo] = addTodo(todoList);
  console.log(newTodo);
  update();
  saveData(newTodo);
  dragAndDrop();

  container.classList.remove("blur");
  // Close modal after adding todo
  modalWindow.classList.toggle("show-modal");
});

inputTodo.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    [todoList, todosHTML, newTodo] = addTodo(todoList);
    update();
    saveData(newTodo);
    dragAndDrop();

    container.classList.remove("blur");
    // Close modal after adding todo
    modalWindow.classList.toggle("show-modal");
  }
});

// This function is used to add event listener to the newly inserted todo elements
function update() {
  delTodoBtns = document.querySelectorAll(".del-todo");
  inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
  todosHTML = document.querySelectorAll("li");

  delTodoBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      removeTodoFromServer(e);
      setTimeout(() => {
        [todoList, todosHTML] = removeTodoFromDOM(e, todoList);
      }, 100);
    });
  });

  inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
  inputCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      e.target.checked
        ? (e.target.parentElement.style.color = "#d3d3d3")
        : (e.target.parentElement.style.color = "#646464");
    });
  });
}
// Sorting
sortBtn.addEventListener("change", (e) => sortFn(e, todosHTML, todoList));
