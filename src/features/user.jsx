import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialStateValues,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.value = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
