import createTodoList from "./createTodoList.js";

const addTodo = (todoList) => {
  const uniqueId = todoList.length.toString();
  let todosHTML;
  let todoListsField = document.querySelector(".todo-lists");
  let inputTodo = document.querySelector(".input-todo");
  // Check if user has acutally input the todo
  // If not, return
  console.log(!inputTodo.value);
  if (!inputTodo.value) return;
  const newTodo = {
    id: uniqueId,
    todo: inputTodo.value,
    completed: false,
  };

  // Add todo to the todo list
  todoList.push(newTodo);
  createTodoList(newTodo.todo, uniqueId);

  // Storing all the todoHTML in a variable
  todosHTML = document.querySelectorAll("li");

  if (todoList.length) {
    // Remove no todo message
    const noTodoMsg = document.querySelector(".no-todo-msg");
    noTodoMsg?.remove();
  }

  // Add scrollbar
  if (todoList.length > 7) todoListsField.style.overflowY = "scroll";

  // Clear input field
  inputTodo.value = "";

  return [todoList, todosHTML, newTodo];
};

export default addTodo;
