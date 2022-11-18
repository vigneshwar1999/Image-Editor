import { configureStore } from "@reduxjs/toolkit";
import CommonReducer from "./Reducers/CommonReducer";

export const store = configureStore({
  reducer: {
    commonData: CommonReducer,
  },
});
