// src/features/categories/categoriesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryData } from "../types";

interface CategoriesState {
  categories: CategoryData[];
}

const initialState: CategoriesState = {
  categories: [
    {
      name: "Category 1",
      subcategories: [
        {
          name: "Subcategory 1.1",
          items: [{ name: "Item 1.1.1" }, { name: "Item 1.1.2" }],
        },
        {
          name: "Subcategory 1.2",
          items: [{ name: "Item 1.2.1" }, { name: "Item 1.2.2" }],
        },
      ],
    },
    {
      name: "Category 2",
      subcategories: [
        {
          name: "Subcategory 2.1",
          items: [{ name: "Item 2.1.1" }, { name: "Item 2.1.2" }],
        },
      ],
    },
    {
      name: "Category 3",
      subcategories: [], // no subcategories
    },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<{ name: string }>) => {
      state.categories.push({
        name: action.payload.name,
        subcategories: [],
      });
    },
    // Add more reducer functions here as needed.
  },
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
