import displayMsg from "./displayMsg.js";

const sortFn = (e, todos, todoList) => {
  const todoListsField = document.querySelector(".todo-lists");
  if (!todos?.length) return;
  console.log(todos);

  let count;
  switch (e.target.value) {
    case "completed":
      todoListsField = "";
      count = 0;
      todos.forEach((todo) => {
        if (todo.querySelector("input").checked) {
          todoListsField.appendChild(todo);
          count++;
        }
      });
      if (!count) {
        displayMsg("No completed todos found!");
      }
      break;

    case "incomplete":
      todoListsField.innerHTML = "";
      count = 0;
      todos.forEach((todo) => {
        if (!todo.querySelector("input").checked) {
          todoListsField.appendChild(todo);
          count++;
        }
      });
      if (!count) {
        displayMsg("No incomplete todos found!");
      }
      break;

    default:
      if (!todoList.length) {
        displayMsg("No todos found!");
        return;
      } else {
        todoListsField.innerHTML = "";
        todos.forEach((todo) => todoListsField.appendChild(todo));
      }

      break;
  }
};

export default sortFn;
