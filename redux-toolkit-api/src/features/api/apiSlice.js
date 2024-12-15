// This is where we'll create our methods to interact with the API

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // api is the deault name for the reducerPath
  reducerPath: "api",
  // baseQuery is a function that takes an object with a baseUrl property
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  //
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
