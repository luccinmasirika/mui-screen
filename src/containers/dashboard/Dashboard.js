import React from 'react';
import { AppBar } from '../../components';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = styled('div')(({ theme }) => ({
  margin: `${theme.spacing(5)} 0`,
  display: 'flex',
  justifyContent: 'space-between',
}));

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar />
      <Container>
        <Header>
          <Button variant='contained'>Add Customer</Button>
          <Button startIcon={<SettingsIcon />}>Settings</Button>
        </Header>
      </Container>
    </Box>
  );
};

export default Dashboard;
