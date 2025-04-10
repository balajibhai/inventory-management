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

// Sample/mock data for demonstration
export const categories: CategoryData[] = [
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
];
