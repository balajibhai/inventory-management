import { Box, Button, TextField } from "@mui/material";

const VariantSelection = () => {
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
      <Box display="flex" gap={2}>
        <TextField label="Name(required)" required />
        <TextField label="Price" />
      </Box>
      <Box display="flex" gap={2}>
        <TextField label="SKU" required />
        <TextField label="Weight" required />
      </Box>
      <Button variant="outlined">Edit</Button>
    </Box>
  );
};

export default VariantSelection;
