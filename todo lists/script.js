// Select the require elements
const inputTodo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
const todoListsField = document.querySelector(".todo-lists");

// Initial todo list value
let todoList = [];

// Function to add todo list
const addTodo = () => {
  // Check if user has acutally input the todo
  // If not, return
  if (!inputTodo.value) return;

  // First todo is always added
  if (!todoList.length) {
    todoList.push(inputTodo.value);
  } else {
    // Check if the todo activity already exists
    if (!todoList.includes(inputTodo.value)) {
      todoList.push(inputTodo.value);
    } else {
      alert("Todo already exists!");
    }
  }

  console.log(todoList);
};

// Add event listeners
addBtn.addEventListener("click", addTodo);
