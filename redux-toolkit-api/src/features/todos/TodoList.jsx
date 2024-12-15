import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { useGetTodosQuery } from "../api/apiSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const {
    data: todos,
    isError,
    isLoading,
    error,
    isSuccess,
  } = useGetTodosQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          placeholder="Enter todo item"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="submit">
          <FontAwesomeIcon icon={faUpload} />
        </button>
      </div>
    </form>
  );
  let content;
  // Define conditional content
  if (isLoading) {
    content = <p>Loading......</p>;
  } else if (isSuccess) {
    content = JSON.stringify(todos);
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <main>
      <h1>Todo list</h1>
      {newItemSection}
      {content}
    </main>
  );
};

export default TodoList;
