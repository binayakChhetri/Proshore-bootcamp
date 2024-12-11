import { createSlice } from "@reduxjs/toolkit";

// Getting data from local storage
const initialState = {
  username: localStorage.getItem("username") || "",
  isAuthenticated: localStorage.getItem("isAuthenticated") || false,
  description: localStorage.getItem("description") || "",
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
    setDescription(state, action) {
      state.description = action.payload;
    },
    restore() {
      return initialState;
    },
  },
});

export const { setUsername, setIsAuthenticated, setDescription, restore } =
  userSlice.actions;
export default userSlice.reducer;
