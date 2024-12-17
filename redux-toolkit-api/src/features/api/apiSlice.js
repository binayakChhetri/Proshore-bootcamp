// This is where we'll create our methods to interact with the API

// createApi: A function from RTK Query used to define an API
// slice. It generates query/mutation hooks for managing server-side data.

// fetchBaseQuery: A lightweight wrapper around the fetch API,
// used to define base configuration like the API's base URL.

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // api is the deault name for the reducerPath
  reducerPath: "api",

  // baseQuery is a function that takes an object with a baseUrl property
  // This sets ""http://localhost:3000"" as the base URL for all requests defined in this API.
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Todos"],
  // The builder parameter provides methods to define queries and mutations.
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      //Here we destructured the id from the todo object that will be passed in
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
