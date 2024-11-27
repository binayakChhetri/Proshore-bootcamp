// Save data in the local storage
const saveData = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

export default saveData;
