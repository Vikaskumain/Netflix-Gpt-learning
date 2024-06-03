import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../Utils/UserSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default appstore;
