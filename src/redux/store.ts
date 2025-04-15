// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

// These types can be used in your components for TypeScript type safety.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
