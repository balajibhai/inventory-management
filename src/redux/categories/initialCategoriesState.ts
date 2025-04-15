// src/features/categories/initialCategoriesState.ts

import { CategoryData } from "../../types";

export const initialCategories: CategoryData[] = [
  {
    name: "Category 1",
    subcategories: [
      {
        name: "Subcategory 1.1",
        items: [
          {
            itemType: "",
            name: "Item 1.1.1",
            description: "",
            nonTaxable: false,
            statusInactive: false,
            location: "",
            unit: "",
            sku: "",
            price: "",
            weight: "",
            tracking: false,
          },
          {
            itemType: "",
            name: "Item 1.1.2",
            description: "",
            nonTaxable: false,
            statusInactive: false,
            location: "",
            unit: "",
            sku: "",
            price: "",
            weight: "",
            tracking: false,
          },
        ],
      },
      {
        name: "Subcategory 1.2",
        items: [
          {
            itemType: "",
            name: "Item 1.2.1",
            description: "",
            nonTaxable: false,
            statusInactive: false,
            location: "",
            unit: "",
            sku: "",
            price: "",
            weight: "",
            tracking: false,
          },
          {
            itemType: "",
            name: "Item 1.2.2",
            description: "",
            nonTaxable: false,
            statusInactive: false,
            location: "",
            unit: "",
            sku: "",
            price: "",
            weight: "",
            tracking: false,
          },
        ],
      },
    ],
  },
  {
    name: "Category 2",
    subcategories: [
      {
        name: "Subcategory 2.1",
        items: [
          {
            itemType: "",
            name: "Item 2.1.1",
            description: "",
            nonTaxable: false,
            statusInactive: false,
            location: "",
            unit: "",
            sku: "",
            price: "",
            weight: "",
            tracking: false,
          },
          {
            itemType: "",
            name: "Item 2.1.2",
            description: "",
            nonTaxable: false,
            statusInactive: false,
            location: "",
            unit: "",
            sku: "",
            price: "",
            weight: "",
            tracking: false,
          },
        ],
      },
    ],
  },
  {
    name: "Category 3",
    subcategories: [], // no subcategories
  },
];
