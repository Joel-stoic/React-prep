// src/app/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/hooks/slices/userSlice.js";
import contactReducer  from "../redux/hooks/slices/AddSlices.js";
export const store = configureStore({
  reducer: {
    user: userReducer, 
    contactInfo:contactReducer
  },
});

export default store; 
