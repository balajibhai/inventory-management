import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { JSX } from "react";
import { useExpansion } from "../../context/ExpansionContext";
import {
  categories,
  CategoryData,
  SubcategoryData,
} from "../../data/categories";
import CategoryRow from "../CategoryRow";

/**
 * Computes descendant keys (all subcategories and items) for a category.
 */
const getDescendantKeysForCategory = (category: CategoryData): string[] => {
  const keys: string[] = [];
  category.subcategories.forEach((subcat) => {
    const subcatKey = `${category.name}->${subcat.name}`;
    keys.push(subcatKey);
    subcat.items.forEach((item) => {
      const itemKey = `${category.name}->${subcat.name}->${item.name}`;
      keys.push(itemKey);
    });
  });
  return keys;
};

/**
 * Computes descendant keys (all items) for a subcategory.
 */
const getDescendantKeysForSubcategory = (
  categoryName: string,
  subcat: SubcategoryData
): string[] => {
  const keys: string[] = [];
  subcat.items.forEach((item) => {
    keys.push(`${categoryName}->${subcat.name}->${item.name}`);
  });
  return keys;
};

const ItemsTable: React.FC = () => {
  const { expanded } = useExpansion();

  return (
    <Paper sx={{ width: "100%", overflowX: "auto", mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Reporting Category</TableCell>
            <TableCell>Locations</TableCell>
            <TableCell>Sold By</TableCell>
            <TableCell>Stock on Hand</TableCell>
            <TableCell>Available to Sell</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => {
            const rows: JSX.Element[] = [];
            const categoryKey = category.name;
            const isCategoryExpanded = expanded[categoryKey] || false;

            // Render category row with descendant keys for selection propagation
            rows.push(
              <CategoryRow
                key={categoryKey}
                label={category.name}
                level={0}
                expandKey={categoryKey}
                isExpandable={category.subcategories.length > 0}
                descendantKeys={getDescendantKeysForCategory(category)}
              />
            );

            // If category is expanded, render its subcategories and items
            if (isCategoryExpanded && category.subcategories.length > 0) {
              category.subcategories.forEach((subcat) => {
                const subcatKey = `${category.name}->${subcat.name}`;
                const isSubcatExpanded = expanded[subcatKey] || false;
                rows.push(
                  <CategoryRow
                    key={subcatKey}
                    label={subcat.name}
                    level={1}
                    expandKey={subcatKey}
                    isExpandable={subcat.items.length > 0}
                    descendantKeys={getDescendantKeysForSubcategory(
                      category.name,
                      subcat
                    )}
                  />
                );
                if (isSubcatExpanded && subcat.items.length > 0) {
                  subcat.items.forEach((item) => {
                    const itemKey = `${category.name}->${subcat.name}->${item.name}`;
                    rows.push(
                      <CategoryRow
                        key={itemKey}
                        label={item.name}
                        level={2}
                        expandKey={itemKey}
                        isExpandable={false}
                        descendantKeys={[]} // Leaf nodes have no descendants
                      />
                    );
                  });
                }
              });
            }
            return rows;
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ItemsTable;
