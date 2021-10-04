import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Logo from './../../components/logo/Logo';
import { CustomInput } from '../../components';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Button, Typography, Paper, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Root = styled(Paper)(({ theme }) => ({
  maxWidth: '100%',
  margin: 'auto',
}));

const LogoContainer = styled('div')(({ theme }) => ({
  width: '40%',
  margin: `${theme.spacing(4)} auto`,
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
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Root elevation={0}>
      <CssBaseline />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Typography variant='h1' component='h1' align='center'>
        Login
      </Typography>
      <TextDescription
        variant='body1'
        component='p'
        align='center'
        gutterBottom
      >
        Welcome back, To login please enter your email and password
      </TextDescription>
      <CustomInput placeholder='Email' handelChange={''} />
      <CustomInput
        placeholder='Password'
        handelChange={''}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <SubmitButton>
        <Button variant='contained'>Login</Button>
      </SubmitButton>
      <Footer>
        <Typography variant='body1' component='p'>
          Don't have an account ?
        </Typography>
        <CustonLink underline='none' to='/registration'>
          Sign Up
        </CustonLink>
      </Footer>
    </Root>
  );
};

export default SignInForm;
