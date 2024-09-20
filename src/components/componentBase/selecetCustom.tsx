import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectReusableProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (event: SelectChangeEvent<string>) => void;
  fullWidth?: boolean;
}

const SelectReusable: React.FC<SelectReusableProps> = ({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth={fullWidth}>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-label`}
          id={`${label}-select`}
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectReusable;
