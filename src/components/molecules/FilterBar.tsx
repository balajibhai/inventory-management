import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import DialogComponent from "./DialogComponent";
import Dropdown from "./Dropdown";

const FilterBar: React.FC = () => {
  const [isCreateItemClicked, setIsCreateItemClicked] = useState(false);
  const onCreateItemClick = () => {
    setIsCreateItemClicked(true);
  };
  const categoryOptions = [
    { value: "", label: "All" },
    { value: "flowers", label: "Flowers" },
    { value: "plants", label: "Plants" },
  ];
  const locationsOptions = [
    { value: "", label: "All" },
    { value: "location1", label: "Location 1" },
    { value: "location2", label: "Location 2" },
  ];
  const statusOptions = [
    { value: "", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

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

      <Dropdown label="Category" options={categoryOptions} />
      <Dropdown label="Locations" options={locationsOptions} />
      <Dropdown label="Status" options={statusOptions} />

      {/* All Filters Button */}
      <Button variant="outlined" sx={{ mr: 2 }}>
        All Filters
      </Button>

      {/* Right-Aligned Buttons */}
      <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
        <Button variant="outlined">Actions</Button>
        <Button variant="contained" color="primary" onClick={onCreateItemClick}>
          Create Item
        </Button>
      </Box>
      <DialogComponent
        open={isCreateItemClicked}
        onClose={() => setIsCreateItemClicked(false)}
        title="Create Item"
      />
    </Box>
  );
};

export default FilterBar;
