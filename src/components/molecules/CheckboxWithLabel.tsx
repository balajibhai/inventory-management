import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { FormData } from "../../types";

type CheckboxWithLabelProps = {
  label: string;
  onCheck?: (checkboxType: keyof FormData, checked: boolean | string) => void;
  checkboxType?: keyof FormData;
};

const CheckboxWithLabel = (props: CheckboxWithLabelProps) => {
  const { label, onCheck, checkboxType } = props;
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onCheck?.(checkboxType as keyof FormData, event.target.checked);
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
