import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  prod: false, // true = production
    isAuthModalOpen: false, // ✅ ADD THIS

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

 // ✅ ADD THESE
    openAuthModal: (state) => {
      state.isAuthModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false;
    },
  },
});

  

export const { setToken, 
  logout, 
  setEnv ,
  openAuthModal,   // ✅ export
  closeAuthModal,  // ✅ export
}
   = authSlice.actions;
export default authSlice.reducer; 