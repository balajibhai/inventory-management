import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Text from "../atoms/Text";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import Dropdown from "../molecules/Dropdown";

const DetailsForm: React.FC = () => {
  // State for the form fields
  const [itemType, setItemType] = useState<string>("physical"); // 'physical' or 'digital'
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
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
  const unitOptions = [{ value: "", label: "All" }];

  // Handler for changing the item type
  const handleItemTypeChange = (event: SelectChangeEvent) => {
    setItemType(event.target.value as string);
  };

  // Handler for auto-creating the name
  const handleAutoCreateName = () => {
    // Here you can implement any logic for auto-generating a name
    setName("My Auto-Created Item");
  };

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
      {/* Title */}
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>

      {/* Item Type */}
      <FormControl fullWidth>
        <InputLabel id="item-type-label">Item type</InputLabel>
        <Select
          labelId="item-type-label"
          id="item-type"
          value={itemType}
          label="Item type"
          onChange={handleItemTypeChange}
        >
          <MenuItem value="physical">Physical good</MenuItem>
          <MenuItem value="digital">Digital good</MenuItem>
        </Select>
      </FormControl>

      {/* Name + Auto create button */}
      <Box display="flex" gap={2}>
        <TextField
          label="Name (required)"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <Button variant="outlined" onClick={handleAutoCreateName}>
          Auto create
        </Button>
      </Box>

      {/* Description text field */}
      <TextField
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <div>
        <CheckboxWithLabel label="Non-taxable" />
        <CheckboxWithLabel label="Status-in-Active" />
      </div>
      <div>
        <Dropdown label="Locations" options={locationsOptions} />
        <Dropdown label="Unit" options={unitOptions} />
        <Dropdown label="Category" options={categoryOptions} />
      </div>
      <Box display="flex" gap={2}>
        <TextField label="SKU" required />
        <TextField label="Price" required />
        <TextField label="Weight" required />
      </Box>
      <Box display="flex" gap={2}>
        <Button variant="contained" color="primary">
          + Modifiers
        </Button>
        <Button variant="contained" color="primary">
          + Custom Attributes
        </Button>
        <Button variant="contained" color="primary">
          + Variations
        </Button>
      </Box>
      <Box display="flex" gap={2}>
        <CheckboxWithLabel label="Tracking" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            marginTop: "8px",
          }}
        >
          <Text
            content="Add low stock alert"
            variant="subtitle1"
            sx={{ color: "blue", cursor: "pointer" }}
          />
          <Text
            content="Receive stock"
            variant="subtitle1"
            sx={{ color: "blue", cursor: "pointer" }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default DetailsForm;
