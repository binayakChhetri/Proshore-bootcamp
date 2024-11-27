import displayMsg from "./displayMsg.js";

const todoListsField = document.querySelector(".todo-lists");
let todosHTML;
const removeTodo = (e, todoList) => {
  const parentElement = e.target.parentElement;
  const todo = parentElement.querySelector("label").textContent;

  // Update todoList array
  todoList = todoList.filter((item) => item !== todo);

  parentElement.remove();
  // Storing all the todoHTML in a variable
  todosHTML = document.querySelectorAll("li");

  // Remove no todo message
  console.log(todoList);
  if (!todoList.length) {
    displayMsg("No todos found!");
  }

  // Remove scrollbar if todo list is less than 8
  if (todoList.length <= 9) todoListsField.style.overflowY = "hidden";

  return [todoList, todosHTML];
};

export default removeTodo;
