import React from 'react';
import { styled } from '@mui/material/styles';
import Placeholder from '../../assets/img/placeholder.png';
import { Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
}));

const UploadButton = styled('label')(({ theme, preview }) => ({
  width: 65,
  height: 65,
  borderRadius: '50%',
  margin: `auto ${theme.spacing(2)}`,
  background: `url(${preview ? preview : Placeholder})`,
  backgroundSize: 'cover',
  cursor: 'pointer',
  flex: 'none',
}));

const Input = styled('input')({
  display: 'none',
});

const TextContent = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const UploadImage = ({ handelChange, preview }) => {
  return (
    <Root>
      <UploadButton htmlFor='button-upload-profile-picture' preview={preview}>
        <Input
          accept='image/*'
          onChange={handelChange}
          id='button-upload-profile-picture'
          type='file'
        />
      </UploadButton>
      <TextContent>
        <Typography variant='h3' component='h1'>
          Photo Profile
        </Typography>
        <Typography variant='body2' component='h1'>
          Upload a photo for your account
        </Typography>
      </TextContent>
    </Root>
  );
};

export default UploadImage;
