// importing the modules
import removeTodo from "./modules/removeTodo.js";
import showTask from "./modules/showTask.js";
import sortFn from "./modules/sortFn.js";
import addTodo from "./modules/addTodo.js";
import saveData from "./modules/saveData.js";

// Select the require elements
const inputTodo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
const todoListsField = document.querySelector(".todo-lists");
let delTodoBtns = document.querySelectorAll(".del-todo");
let inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
const sortBtn = document.querySelector("#sort-by");
//This will be used while sorting the todo list
let todosHTML;

// Initial todo list value
let todoList = JSON.parse(localStorage.getItem("todoList"))?.length
  ? JSON.parse(localStorage.getItem("todoList"))
  : [];

// Load the todo list from the local storage
showTask(todoList);
update();

// Add event listeners
addBtn.addEventListener("click", () => {
  [todoList, todosHTML] = addTodo(todoList);
  update();
  saveData(todoList);
});

inputTodo.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    [todoList, todosHTML] = addTodo(todoList);
    update();
    saveData(todoList);
  }
});

// This function is used to add event listener to the newly inserted todo elements
function update() {
  delTodoBtns = document.querySelectorAll(".del-todo");
  inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
  todosHTML = document.querySelectorAll("li");

  delTodoBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      [todoList, todosHTML] = removeTodo(e, todoList);
      saveData(todoList);
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
