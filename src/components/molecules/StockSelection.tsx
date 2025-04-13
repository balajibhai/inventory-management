import {
  Box,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import CheckboxWithLabel from "./CheckboxWithLabel";

const StockSelection = () => {
  const addStockOptions = [
    { value: "option1", label: "Stock Received" },
    { value: "option2", label: "Inv recount" },
    { value: "option3", label: "Damage" },
    { value: "option4", label: "Loss" },
    { value: "option5", label: "Return" },
    { value: "option6", label: "Temple" },
    { value: "option7", label: "Custom" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 600,
        margin: "0 auto",
        p: 2,
      }}
    >
      <CheckboxWithLabel label="Location 1" />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {/* Row for Stock */}
            <TableRow>
              <TableCell>Stock</TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Enter stock"
                />
              </TableCell>
            </TableRow>

            {/* Row for Add stock with dropdown */}
            <TableRow>
              <TableCell>Add stock</TableCell>
              <TableCell>
                <TextField
                  select
                  variant="outlined"
                  fullWidth
                  defaultValue=""
                  placeholder="Select an option"
                >
                  {addStockOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
            </TableRow>

            {/* Row for Cost */}
            <TableRow>
              <TableCell>Cost (optional)</TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Enter cost"
                />
              </TableCell>
            </TableRow>

            {/* Row for Vendor */}
            <TableRow>
              <TableCell>Vendor (optional)</TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Enter vendor"
                />
              </TableCell>
            </TableRow>

            {/* Row for ROP */}
            <TableRow>
              <TableCell>ROP</TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Enter ROP"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockSelection;
