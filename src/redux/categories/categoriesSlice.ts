// src/features/categories/categoriesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState, CategoryData, NewItemPayload } from "../../types";
import { initialCategories } from "./initialCategoriesState";

// Define the payload interface for adding a new item.
// The new item includes a required "category" and an optional "subcategory".

const initialState: CategoriesState = {
  categories: initialCategories,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // Reducer to add an item into a given category and subcategory.
    addItem: (state, action: PayloadAction<NewItemPayload>) => {
      const newItem = action.payload;
      const categoryName = newItem.category;
      // Extract and remove "category" and "subcategory" fields.
      const { category, subcategory, ...itemWithoutCategory } = newItem;

      // Helper function to add an item into a category's subcategory.
      const addToCategory = (cat: CategoryData) => {
        if (subcategory && subcategory.trim() !== "") {
          // Look for the provided subcategory in the category.
          const foundSubcat = cat.subcategories.find(
            (sc) => sc.name === subcategory
          );
          if (foundSubcat) {
            foundSubcat.items.push(itemWithoutCategory);
          } else {
            // If the provided subcategory doesn't exist, create a default subcategory.
            cat.subcategories.push({
              name: "Default Subcategory",
              items: [itemWithoutCategory],
            });
          }
        } else {
          // If no subcategory is provided.
          if (cat.subcategories.length > 0) {
            // Add to the first available subcategory.
            cat.subcategories[0].items.push(itemWithoutCategory);
          } else {
            // Create a default subcategory and add the item.
            cat.subcategories.push({
              name: "Default Subcategory",
              items: [itemWithoutCategory],
            });
          }
        }
      };

      // Check if the category exists.
      const foundCategory = state.categories.find(
        (cat) => cat.name === categoryName
      );

      if (foundCategory) {
        // If the category exists, add the item using the helper function.
        addToCategory(foundCategory);
      } else {
        // If the category doesn't exist, create a new category and add the item.
        const newCategory: CategoryData = {
          name: categoryName,
          subcategories: [],
        };
        addToCategory(newCategory);
        state.categories.push(newCategory);
      }
    },
  },
});

export const { addItem } = categoriesSlice.actions;
export default categoriesSlice.reducer;
