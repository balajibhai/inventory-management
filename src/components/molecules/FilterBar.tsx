// src/components/molecules/FilterBar.tsx
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const FilterBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Search Field */}
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search"
        sx={{ mr: 2 }}
      />

      {/* Category Select */}
      <FormControl size="small" sx={{ mr: 2, minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select label="Category" defaultValue="">
          <MenuItem value="">All</MenuItem>
          {/* Add more categories */}
          <MenuItem value="flowers">Flowers</MenuItem>
          <MenuItem value="plants">Plants</MenuItem>
        </Select>
      </FormControl>

      {/* Locations Select */}
      <FormControl size="small" sx={{ mr: 2, minWidth: 120 }}>
        <InputLabel>Locations</InputLabel>
        <Select label="Locations" defaultValue="">
          <MenuItem value="">All</MenuItem>
          <MenuItem value="location1">Location 1</MenuItem>
          <MenuItem value="location2">Location 2</MenuItem>
        </Select>
      </FormControl>

      {/* Status Select */}
      <FormControl size="small" sx={{ mr: 2, minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select label="Status" defaultValue="">
          <MenuItem value="">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </FormControl>

      {/* All Filters Button */}
      <Button variant="outlined" sx={{ mr: 2 }}>
        All Filters
      </Button>

      {/* Right-Aligned Buttons */}
      <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
        <Button variant="outlined">Actions</Button>
        <Button variant="contained" color="primary">
          Create Item
        </Button>
      </Box>
    </Box>
  );
};

export default FilterBar;
