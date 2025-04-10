import { Checkbox, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useExpansion } from "../context/ExpansionContext";

interface CategoryRowProps {
  label: string;
  level: number; // 0 for category, 1 for subcategory, 2 for item, etc.
  expandKey: string; // Unique key used for expansion state
}

const CategoryRow: React.FC<CategoryRowProps> = ({
  label,
  level,
  expandKey,
}) => {
  const { expanded, toggleExpand } = useExpansion();
  const isExpanded = expanded[expandKey] || false;
  const paddingLeft = `${level * 20}px`;

  return (
    <TableRow>
      <TableCell sx={{ paddingLeft }}>
        <Checkbox
          checked={isExpanded}
          onChange={() => toggleExpand(expandKey)}
          size="small"
        />
        {label}
      </TableCell>
      <TableCell>–</TableCell>
      <TableCell>All Locations</TableCell>
      <TableCell>ea</TableCell>
      <TableCell>0</TableCell>
      <TableCell>0</TableCell>
      <TableCell>$0.00</TableCell>
    </TableRow>
  );
};

export default CategoryRow;
