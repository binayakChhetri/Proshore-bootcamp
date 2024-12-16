import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/apiSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const {
    data: todos,
    isError,
    isLoading,
    error,
    isSuccess,
  } = useGetTodosQuery();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo) return;
    console.log(newTodo);

    // addTodo
    addTodo({ userId: Date.now(), title: newTodo, completed: false });
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
    // JSON.stringify(todos);
    content = todos.map((todo) => {
      return (
        <article id={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodo({ ...todo, completed: !todo.completed })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button className="trash" onClick={() => deleteTodo({ id: todo.id })}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </article>
      );
    });
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
