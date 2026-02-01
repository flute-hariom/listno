import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  prod: false, // true = production
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
    setEnv: (state, action) => {
      state.prod = action.payload;
    },
  },
});

export const { setToken, logout, setEnv } = authSlice.actions;
export default authSlice.reducer;
