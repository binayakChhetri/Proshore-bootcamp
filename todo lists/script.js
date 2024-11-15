// Select the require elements
const inputTodo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn");
const todoListsField = document.querySelector(".todo-lists");
let delTodoBtns = document.querySelectorAll(".del-todo");
let inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
const sortBtn = document.querySelector("#sort-by");

// Initial todo list value
let todoList = [];

// Load the todo list from the local storage
function showTask() {
  if (localStorage.getItem("todoList")) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.forEach((todo) => {
      createTodoList(todo);
      console.log(todo);
    });

    update();
  }
  // Display scrollbar if todo list is more than 8
  if (todoList.length > 8) todoListsField.style.overflowY = "scroll";

  if (todoList.length === 0) {
    const noTodoMsg = document.createElement("li");
    noTodoMsg.classList.add("no-todo-msg");
    noTodoMsg.textContent = "No todos found!";
    todoListsField.appendChild(noTodoMsg);
  } else {
    const noTodoMsg = document.querySelector(".no-todo-msg");
    noTodoMsg.remove();
  }
}

// Function to add todo list
const addTodo = () => {
  // Check if user has acutally input the todo
  // If not, return
  if (!inputTodo.value) return;

  // First todo is always added
  if (!todoList.length) {
    todoList.push(inputTodo.value);
    createTodoList(inputTodo.value);

    // Remove no todo message
    const noTodoMsg = document.querySelector(".no-todo-msg");
    noTodoMsg.remove();
  } else {
    // Check if the todo activity already exists
    if (!todoList.includes(inputTodo.value)) {
      todoList.push(inputTodo.value);
      createTodoList(inputTodo.value);
    } else {
      alert("Todo already exists!");
    }
  }

  console.log(todoList);
  // Add scrollbar
  if (todoList.length > 9) todoListsField.style.overflowY = "scroll";

  // Clear input field
  inputTodo.value = "";
  saveData();

  update();
};

// Function to create todo list
const createTodoList = (todo) => {
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
};

// Function to remove todo list
const removeTodo = (e) => {
  const parentElement = e.target.parentElement;
  const todo = parentElement.querySelector("label").textContent;

  // Update todoList array
  todoList = todoList.filter((item) => item !== todo);

  parentElement.remove();
  saveData();

  // Remove no todo message
  if (todoList.length === 0) {
    const noTodoMsg = document.createElement("li");
    noTodoMsg.classList.add("no-todo-msg");
    noTodoMsg.textContent = "No todos found!";
    todoListsField.appendChild(noTodoMsg);
  }

  // Remove scrollbar if todo list is less than 8
  if (todoList.length <= 9) todoListsField.style.overflowY = "hidden";
};

// Add event listeners
addBtn.addEventListener("click", addTodo);
inputTodo.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

// Save data in the local storage
function saveData() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

// Load the todo list from the local storage
showTask();

// With this function, newly added todo list will be selected and event listener will be added
function update() {
  // Select the elements for adding event listener after being loaded
  delTodoBtns = document.querySelectorAll(".del-todo");
  delTodoBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => removeTodo(e));
  });

  inputCheckboxes = document.querySelectorAll("input[type='checkbox']");
  inputCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      console.log(e.target.checked);
      e.target.checked
        ? (e.target.parentElement.style.color = "#d3d3d3")
        : (e.target.parentElement.style.color = "#646464");
    });
  });
}
