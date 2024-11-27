// Function to create todo list
const todoListsField = document.querySelector(".todo-lists");
const createTodoList = (todo, todosHTML) => {
  // Create new todo list elements
  const todoLi = document.createElement("li");
  const todoLabel = document.createElement("label");
  const todoCheckbox = document.createElement("input");
  const delTodoBtn = document.createElement("button");

  todoLabel.setAttribute("for", `todo-${todo}`);
  todoLabel.textContent = todo;
  todoCheckbox.type = "checkbox";
  todoCheckbox.id = `todo-${todo}`;
  delTodoBtn.textContent = "x";
  delTodoBtn.classList.add("del-todo");

  // Append todo list to the todo list field
  todoLi.appendChild(todoLabel);
  todoLi.appendChild(todoCheckbox);
  todoLi.appendChild(delTodoBtn);
  todoListsField.appendChild(todoLi);

  // After creation, the tods html will be stored in todosHTML
  todosHTML = document.querySelectorAll("li");
};

export default createTodoList;
