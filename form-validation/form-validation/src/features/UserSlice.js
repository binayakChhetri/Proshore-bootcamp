import { createSlice } from "@reduxjs/toolkit";

// Getting data from local storage
const initialState = {
  username: localStorage.getItem("username") || "",
  isAuthenticated: localStorage.getItem("isAuthenticated") || false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    restore(state) {
      return initialState;
    },
  },
});

export const { setUsername, setIsAuthenticated, restore } = userSlice.actions;
export default userSlice.reducer;
