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
import { categories } from "../../data/categories";
import CategoryRow from "../CategoryRow";

const ItemsTable: React.FC = () => {
  const { expanded } = useExpansion();

  // Render a category and its children recursively.
  const renderCategory = (
    category: (typeof categories)[0],
    level: number = 0
  ) => {
    const rows: JSX.Element[] = [];
    const categoryKey = category.name;
    const isCategoryExpanded = expanded[categoryKey] || false;

    // Render the category row (level 0)
    rows.push(
      <CategoryRow
        key={categoryKey}
        label={category.name}
        level={level}
        expandKey={categoryKey}
      />
    );

    // Render subcategories if category is expanded
    if (isCategoryExpanded && category.subcategories.length > 0) {
      category.subcategories.forEach((subcat) => {
        const subcatKey = `${categoryKey}->${subcat.name}`;
        const isSubcatExpanded = expanded[subcatKey] || false;

        // Render subcategory row (level 1)
        rows.push(
          <CategoryRow
            key={subcatKey}
            label={subcat.name}
            level={level + 1}
            expandKey={subcatKey}
          />
        );

        // Render items if subcategory is expanded (level 2)
        if (isSubcatExpanded && subcat.items.length > 0) {
          subcat.items.forEach((item) => {
            const itemKey = `${subcatKey}->${item.name}`;
            rows.push(
              <CategoryRow
                key={itemKey}
                label={item.name}
                level={level + 2}
                expandKey={itemKey} // Items are not expandable
              />
            );
          });
        }
      });
    }
    return rows;
  };

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
          {categories.map((category) => renderCategory(category))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ItemsTable;
