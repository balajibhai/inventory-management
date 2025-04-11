import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useExpansion } from "../context/ExpansionContext";
import { useSelection } from "../context/SelectionContext";

interface CategoryRowProps {
  label: string;
  level: number; // 0 for category, 1 for subcategory, 2 for item
  expandKey: string; // Unique key for this row (used in both contexts)
  isExpandable: boolean; // Whether the row can be expanded (has children)
  descendantKeys?: string[]; // Keys of descendant rows for selection propagation
}

const CategoryRow: React.FC<CategoryRowProps> = ({
  label,
  level,
  expandKey,
  isExpandable,
  descendantKeys = [],
}) => {
  const { expanded, toggleExpand } = useExpansion();
  const { selected, toggleSelect } = useSelection();
  const isExpanded = expanded[expandKey] || false;
  const isSelected = selected[expandKey] || false;
  const paddingLeft = `${level * 20}px`;

  return (
    <TableRow>
      <TableCell sx={{ paddingLeft, display: "flex", alignItems: "center" }}>
        {/* Render expansion control if this row is expandable */}
        {isExpandable && (
          <IconButton size="small" onClick={() => toggleExpand(expandKey)}>
            {isExpanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
          </IconButton>
        )}
        {/* Render selection checkbox */}
        <Checkbox
          checked={isSelected}
          onChange={() => toggleSelect(expandKey, descendantKeys)}
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
