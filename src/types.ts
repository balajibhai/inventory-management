// src/types.ts
export interface ItemData {
  name: string;
}

export interface SubcategoryData {
  name: string;
  items: FormData[];
}

export interface CategoryData {
  name: string;
  subcategories: SubcategoryData[];
}

export interface FormData {
  itemType: string;
  name: string;
  description: string;
  nonTaxable: boolean;
  statusInactive: boolean;
  location: string;
  unit: string;
  category?: string;
  sku: string;
  price: string;
  weight: string;
  tracking: boolean;
}

export interface CategoriesState {
  categories: CategoryData[];
}

export interface NewItemPayload extends FormData {
  category: string;
  subcategory?: string;
}

export interface EditDialogue {
  item: FormData;
  category: string;
  subcategory: string;
}
