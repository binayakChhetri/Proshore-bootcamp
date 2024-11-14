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

  // Clear input field
  inputTodo.value = "";
  console.log(todoList);
  // Add scrollbar
  if (todoList.length > 9) todoListsField.style.overflowY = "scroll";

  createTodoElements();
};

const createTodoElements = () => {
  // Create new todo list elements
  todoList.forEach((todo, index) => {
    const todoLi = document.createElement("li");
    const todoLabel = document.createElement("label");
    todoLabel.setAttribute("for", `todo-${index}`);
    todoLabel.textContent = todo;
    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.id = `todo-${index}`;

    // Append todo list to the todo list field
    todoLi.appendChild(todoLabel);
    todoLi.appendChild(todoCheckbox);
    todoListsField.appendChild(todoLi);
  });
};

// Add event listeners
addBtn.addEventListener("click", addTodo);
