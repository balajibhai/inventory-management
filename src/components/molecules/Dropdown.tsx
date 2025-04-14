import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FormData } from "../../types";

type DropdownProps = {
  label: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (type: keyof FormData, value: string) => void;
  type?: keyof FormData;
};

const Dropdown = (props: DropdownProps) => {
  const { label, options, value, onChange, type } = props;

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange?.(type as keyof FormData, event.target.value);
  };

  return (
    <FormControl size="small" sx={{ mr: 2, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value || ""} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
