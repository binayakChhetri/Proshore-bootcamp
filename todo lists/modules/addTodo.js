import createTodoList from "./createTodoList.js";

let inputTodo = document.querySelector(".input-todo");
let todoListsField = document.querySelector(".todo-lists");
let todosHTML;
const addTodo = (todoList) => {
  // Check if user has acutally input the todo
  // If not, return
  if (!inputTodo.value) return;

  // First todo is always added
  if (!todoList.length) {
    todoList.push(inputTodo.value);
    createTodoList(inputTodo.value);

    // Remove no todo message
    const noTodoMsg = document.querySelector(".no-todo-msg");
    noTodoMsg?.remove();
  } else {
    // Check if the todo activity already exists
    if (!todoList.includes(inputTodo.value)) {
      todoList.push(inputTodo.value);
      createTodoList(inputTodo.value);
    } else {
      alert("Todo already exists!");
    }

    // Storing all the todoHTML in a variable
    todosHTML = document.querySelectorAll("li");
  }

  // Add scrollbar
  if (todoList.length > 7) todoListsField.style.overflowY = "scroll";

  // Clear input field
  inputTodo.value = "";

  return [todoList, todosHTML];
};

export default addTodo;
