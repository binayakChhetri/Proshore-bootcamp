import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isAuthenticated: false,
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
