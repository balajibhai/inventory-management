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

export interface FormData {
  itemType: string;
  name: string;
  description: string;
  nonTaxable: boolean;
  statusInactive: boolean;
  location: string;
  unit: string;
  category: string;
  sku: string;
  price: string;
  weight: string;
  tracking: boolean;
}
