// src/types.ts
export interface ItemData {
  name: string;
}

export interface SubcategoryData {
  name: string;
  items: ItemData[];
}

export interface CategoryData {
  name: string;
  subcategories: SubcategoryData[];
}
