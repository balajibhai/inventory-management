import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { FormData } from "../../types";
import Text from "../atoms/Text";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import Dropdown from "../molecules/Dropdown";
import PopupDialog from "./PopupDialog";

type DetailsFormProps = {
  onItemPropertyChange: (type: keyof FormData, value: string | boolean) => void;
  formData: FormData;
};

const DetailsForm = (props: DetailsFormProps) => {
  const { onItemPropertyChange, formData } = props;
  // Initial form data state

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
      <Dropdown
        label="Item type"
        options={itemTypeOptions}
        onChange={onItemPropertyChange}
        type="itemType"
        value={formData.itemType}
      />

      {/* Name + Auto create button */}
      <Box display="flex" gap={2}>
        <TextField
          label="Name (required)"
          required
          value={formData.name}
          onChange={(e) => onItemPropertyChange("name", e.target.value)}
          fullWidth
        />
        <Button variant="outlined">Edit</Button>
      </Box>

      {/* Description text field */}
      <TextField
        label="Description"
        multiline
        rows={4}
        value={formData.description}
        onChange={(e) => onItemPropertyChange("description", e.target.value)}
        fullWidth
      />
      <div>
        <CheckboxWithLabel
          label="Non-taxable"
          checkboxType="nonTaxable"
          onCheck={onItemPropertyChange}
        />
        <CheckboxWithLabel
          label="Status-in-Active"
          checkboxType="statusInactive"
          onCheck={onItemPropertyChange}
        />
      </div>
      <div>
        <Dropdown
          label="Locations"
          options={locationsOptions}
          value={formData.location}
          type="location"
          onChange={onItemPropertyChange}
        />
        <Dropdown
          label="Unit"
          options={unitOptions}
          value={formData.unit}
          type="unit"
          onChange={onItemPropertyChange}
        />
        <Dropdown
          label="Category"
          options={categoryOptions}
          value={formData.category}
          type="category"
          onChange={onItemPropertyChange}
        />
      </div>
      <Box display="flex" gap={2}>
        <TextField
          label="SKU"
          required
          value={formData.sku}
          onChange={(e) => onItemPropertyChange("sku", e.target.value)}
        />
        <TextField
          label="Price"
          required
          value={formData.price}
          onChange={(e) => onItemPropertyChange("price", e.target.value)}
        />
        <TextField
          label="Weight"
          required
          value={formData.weight}
          onChange={(e) => onItemPropertyChange("weight", e.target.value)}
        />
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
        <CheckboxWithLabel
          label="Tracking"
          checkboxType="tracking"
          onCheck={onItemPropertyChange}
        />
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
