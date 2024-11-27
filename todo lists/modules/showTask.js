import displayMsg from "./displayMsg.js";
import createTodoList from "./createTodoList.js";

let todoListsField = document.querySelector(".todo-lists");
// Show todos stored on the local storage
export default function showTask(todoList) {
  if (todoList.length) {
    todoList.forEach((todo) => {
      createTodoList(todo, todoListsField);
    });
  }
  // Display scrollbar if todo list is more than 8
  if (todoList.length > 8) todoListsField.style.overflowY = "scroll";

  if (todoList.length === 0) {
    displayMsg("No todos found!", todoListsField);
  } else {
    const noTodoMsg = document.querySelector(".no-todo-msg");
    noTodoMsg?.remove();
  }
}
