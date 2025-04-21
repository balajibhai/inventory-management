import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CategoriesState,
  CategoryData,
  FormData,
  SubcategoryData,
} from "../../types";
import { initialCategories } from "./initialCategoriesState";

const initialState: CategoriesState = {
  categories: initialCategories,
};

/**
 * Get or create a CategoryData with the given name
 */
function getOrCreateCategory(
  categories: CategoryData[],
  name: string
): CategoryData {
  let category = categories.find((c) => c.name === name);
  if (!category) {
    category = { name, subcategories: [] };
    categories.push(category);
  }
  return category;
}

/**
 * Get or create a subcategory under a category
 */
function getOrCreateSubcategory(
  category: CategoryData,
  subName?: string
): SubcategoryData {
  if (subName && subName.trim()) {
    let sub = category.subcategories.find((s) => s.name === subName);
    if (!sub) {
      sub = { name: subName, items: [] };
      category.subcategories.push(sub);
    }
    return sub;
  }

  // fallback: use or create the first/default subcategory
  if (category.subcategories.length === 0) {
    const defaultSub: SubcategoryData = {
      name: "Default Subcategory",
      items: [],
    };
    category.subcategories.push(defaultSub);
    return defaultSub;
  }
  return category.subcategories[0];
}

/**
 * Core logic to add an item into categories
 */
function addItemLogic(categories: CategoryData[], item: FormData): void {
  const cat = getOrCreateCategory(categories, item.category);
  const sub = getOrCreateSubcategory(cat, item.subcategory);
  sub.items.push(item);
}

/**
 * Remove any item matching the given name from all categories
 */
function removeItemByName(categories: CategoryData[], name: string): void {
  categories.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      sub.items = sub.items.filter((it) => it.name !== name);
    });
  });
}

/**
 * Cleanup empty subcategories and categories
 */
function cleanupEmpty(categories: CategoryData[]): void {
  // remove empties in subcategories
  categories.forEach((cat) => {
    cat.subcategories = cat.subcategories.filter((sub) => sub.items.length > 0);
  });

  // remove any categories that have no subcategories left
  for (let i = categories.length - 1; i >= 0; i--) {
    if (categories[i].subcategories.length === 0) {
      categories.splice(i, 1);
    }
  }
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FormData>) => {
      addItemLogic(state.categories, action.payload);
    },

    /**
     * Remove old item and insert updated one,
     * then clean up any empty containers.
     */
    editItem: (
      state,
      action: PayloadAction<{ originalName: string; updatedItem: FormData }>
    ) => {
      const { originalName, updatedItem } = action.payload;

      // 1. remove old
      removeItemByName(state.categories, originalName);

      // 2. insert new
      addItemLogic(state.categories, updatedItem);

      // 3. cleanup
      cleanupEmpty(state.categories);
    },

    /**
     * Remove a category, subcategory, or item by name,
     * then clean up any empty categories/subcategories.
     */
    removeByName: (state, action: PayloadAction<string>) => {
      const nameToDelete = action.payload;

      // drop top-level matching category
      state.categories = state.categories.filter(
        (cat) => cat.name !== nameToDelete
      );

      // drop matching subcategories and items
      state.categories.forEach((cat) => {
        cat.subcategories = cat.subcategories.filter(
          (sub) => sub.name !== nameToDelete
        );
        cat.subcategories.forEach((sub) => {
          sub.items = sub.items.filter((item) => item.name !== nameToDelete);
        });
      });

      // cleanup empties
      cleanupEmpty(state.categories);
    },
  },
});

export const { addItem, editItem, removeByName } = categoriesSlice.actions;
export default categoriesSlice.reducer;
