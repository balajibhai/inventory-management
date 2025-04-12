import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type DropdownProps = {
  label: string;
  options: Array<{ value: string; label: string }>;
};

const Dropdown = (props: DropdownProps) => {
  const { label, options } = props;
  return (
    <FormControl size="small" sx={{ mr: 2, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} defaultValue="">
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
