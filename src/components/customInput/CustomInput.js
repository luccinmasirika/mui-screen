import React from 'react';
import { FilledInput, FormControl, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(1)} 0`,
}));

const CustomInput = ({ icon, placeholder, value, handelChange }) => {
  return (
    <Root>
      <FormControl fullWidth variant='filled'>
        <FilledInput
          id='filled-adornment-amount'
          placeholder={placeholder}
          disableUnderline={true}
          onChange={handelChange}
          value={value}
          startAdornment={
            icon && <InputAdornment position='end'>{icon}</InputAdornment>
          }
        />
      </FormControl>
    </Root>
  );
};

export default CustomInput;
