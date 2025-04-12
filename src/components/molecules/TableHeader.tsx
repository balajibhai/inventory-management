import { TableCell, TableHead, TableRow } from "@mui/material";

const tableHeaders = [
  "Item",
  "Reporting Category",
  "Locations",
  "Sold By",
  "Stock on Hand",
  "Available to Sell",
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
