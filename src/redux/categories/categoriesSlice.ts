// src/features/categories/categoriesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState, CategoryData, FormData } from "../../types";
import { initialCategories } from "./initialCategoriesState";

const initialState: CategoriesState = {
  categories: initialCategories,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FormData>) => {
      const { category, subcategory } = action.payload;
      const item = action.payload;
      const foundCategory = state.categories.find((c) => c.name === category);

      const addTo = (cat: CategoryData) => {
        if (subcategory && subcategory.trim()) {
          const sub = cat.subcategories.find((s) => s.name === subcategory);
          if (sub) sub.items.push(item);
          else
            cat.subcategories.push({
              name: "Default Subcategory",
              items: [item],
            });
        } else {
          if (cat.subcategories.length > 0) {
            cat.subcategories[0].items.push(item);
          } else {
            cat.subcategories.push({
              name: "Default Subcategory",
              items: [item],
            });
          }
        }
      };

      if (foundCategory) {
        addTo(foundCategory);
      } else {
        const newCat: CategoryData = { name: category, subcategories: [] };
        addTo(newCat);
        state.categories.push(newCat);
      }
    },

    // --- new reducer to delete by name at ANY level ---
    removeByName: (state, action: PayloadAction<string>) => {
      const nameToDelete = action.payload;

      // 1) remove matching top-level categories
      state.categories = state.categories.filter(
        (cat) => cat.name !== nameToDelete
      );

      // 2) within each remaining category...
      state.categories.forEach((cat) => {
        // remove matching subcategories
        cat.subcategories = cat.subcategories.filter(
          (sub) => sub.name !== nameToDelete
        );

        // 3) within each subcategory, remove matching items
        cat.subcategories.forEach((sub) => {
          sub.items = sub.items.filter((item) => item.name !== nameToDelete);
        });
      });
    },
  },
});

export const { addItem, removeByName } = categoriesSlice.actions;
export default categoriesSlice.reducer;
