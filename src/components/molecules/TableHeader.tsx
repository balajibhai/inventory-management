import { TableCell, TableHead, TableRow } from "@mui/material";

const tableHeaders = [
  "Item",
  "Location",
  "Unit",
  "Stock on Hand",
  "Available to Sell",
  "ROP",
  "Price",
];

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((header) => (
          <TableCell key={header}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
