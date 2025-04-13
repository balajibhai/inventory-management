import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Text from "../atoms/Text";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import Dropdown from "../molecules/Dropdown";
import PopupDialog from "./PopupDialog";

const DetailsForm: React.FC = () => {
  // State for the form fields
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isVarianceClicked, setIsVarianceClicked] = useState<boolean>(false);
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
  const itemTypeOptions = [
    { value: "physicalgood", label: "Physical good" },
    { value: "digitalgood", label: "Digital good" },
  ];
  const unitOptions = [{ value: "", label: "All" }];

  const onVarianceClick = () => {
    setIsVarianceClicked(!isVarianceClicked);
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
      <Text content="Details" variant="h6" />

      {/* Item Type */}
      <Dropdown label="Item type" options={itemTypeOptions} />

      {/* Name + Auto create button */}
      <Box display="flex" gap={2}>
        <TextField
          label="Name (required)"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <Button variant="outlined">Edit</Button>
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
        <Button variant="contained" color="primary" onClick={onVarianceClick}>
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
      <PopupDialog open={isVarianceClicked} onClose={onVarianceClick} />
    </Box>
  );
};

export default DetailsForm;
