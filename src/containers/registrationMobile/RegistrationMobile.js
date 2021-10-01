import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Logo from './../../components/logo/Logo';
import Typography from '@mui/material/Typography';
import { UploadImage, CustomInput } from '../../components';

import { FaPhoneAlt } from 'react-icons/fa';
import { BiAt } from 'react-icons/bi';
import { Button } from '@mui/material';
import { Link } from '@mui/material';

const LogoContainer = styled('div')(({ theme }) => ({
  width: '35%',
  margin: `${theme.spacing(8)} auto ${theme.spacing(4)}`,
}));

const TextDescription = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const SubmitButton = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: `${theme.spacing(4)} auto`,
}));

const Footer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: `${theme.spacing(4)} auto`,
}));

const CustonLink = styled(Link)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  fontWeight: 600,
}));

const RegistrationMobile = () => {
  const [preview, setPreview] = useState(null);
  const handelChange = (props) => (event) => {
    event.preventDefault();
    if (props === 'profile') {
      setPreview(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Container>
      <CssBaseline />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Typography variant='h1' component='h1' align='center'>
        Create an Account
      </Typography>
      <TextDescription
        variant='body1'
        component='p'
        align='center'
        gutterBottom
      >
        Let's get you all set up so you can start managing your content
      </TextDescription>
      <UploadImage handelChange={handelChange('profile')} preview={preview} />
      <CustomInput placeholder='First Name' />
      <CustomInput placeholder='Last Name' />
      <CustomInput placeholder='Phone' icon={<FaPhoneAlt />} />
      <CustomInput placeholder='Email' icon={<BiAt />} />
      <CustomInput placeholder='Password' />
      <CustomInput placeholder='Confirme Password' />
      <SubmitButton>
        <Button variant='contained'>Register</Button>
      </SubmitButton>
      <Footer>
        <Typography variant='body1' component='p'>
          Already have an account ?
        </Typography>
        <CustonLink underline='none'>Signin</CustonLink>
      </Footer>
    </Container>
  );
};

export default RegistrationMobile;
