// Message to be displayed when no todos are found
const todoListsField = document.querySelector(".todo-lists");
const displayMsg = (message) => {
  const noTodoMsg = document.createElement("h4");
  noTodoMsg.classList.add("no-todo-msg");
  noTodoMsg.textContent = `${message}`;
  todoListsField.appendChild(noTodoMsg);
};

export default displayMsg;
