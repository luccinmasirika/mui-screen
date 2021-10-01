import React from 'react';
import { FilledInput, FormControl, InputAdornment } from '@mui/material';

const CustomInput = ({ icon, placeholder }) => {
  return (
    <FormControl fullWidth variant='filled'>
      <FilledInput
        id='filled-adornment-amount'
        placeholder={placeholder}
        disableUnderline={true}
        startAdornment={
          icon && <InputAdornment position='end'>{icon}</InputAdornment>
        }
      />
    </FormControl>
  );
};

export default CustomInput;
