import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignment/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer
  },
});
export default store;