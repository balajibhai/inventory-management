// utils/findItemByName.ts
import { CategoryData } from "../types"; // adjust the path if needed

/**
 *  Returns the item object (and its path) or undefined if not found.
 */
export function findItemByName(categories: CategoryData[], itemName: string) {
  for (const category of categories) {
    for (const sub of category.subcategories ?? []) {
      const item = sub.items.find((i) => i.name === itemName);
      if (item) {
        return { item, category: category.name, subcategory: sub.name };
      }
    }
  }
  // not found
  return undefined;
}
