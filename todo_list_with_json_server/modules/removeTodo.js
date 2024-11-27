import displayMsg from "./displayMsg.js";
import { URL } from "../script.js";

const todoListsField = document.querySelector(".todo-lists");
let todosHTML;
export const removeTodoFromDOM = (e, todoList) => {
  const parentElement = e.target.parentElement;
  const todo = parentElement.querySelector("label").textContent;

  // Update todoList array
  todoList = todoList.filter((item) => item.todo !== todo);
  console.log(todoList);

  parentElement.remove();

  // Storing all the todoHTML in a variable
  todosHTML = document.querySelectorAll("li");

  // Remove no todo message
  if (!todoList.length) {
    displayMsg("No todos found!");
  }

  // Remove scrollbar if todo list is less than 8
  if (todoList.length <= 9) todoListsField.style.overflowY = "hidden";

  return [todoList, todosHTML];
};

export const removeTodoFromServer = async (e) => {
  const parentElement = e.target.parentElement;
  const id = parentElement.id;
  console.log(id);
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to save");
    }

    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log("Failed to save");
  }
};
