import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

type CheckboxWithLabelProps = {
  label: string;
};

const CheckboxWithLabel = (props: CheckboxWithLabelProps) => {
  const { label } = props;
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={handleChange} color="primary" />
      }
      label={label}
    />
  );
};

export default CheckboxWithLabel;
