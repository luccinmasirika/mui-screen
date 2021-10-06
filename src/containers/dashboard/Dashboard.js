import React from 'react';
import { AppBar, CustomersList } from '../../components';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Container, Fab } from '@mui/material';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled('div')(({ theme }) => ({
  margin: `${theme.spacing(6)} 0`,
  display: 'flex',
  justifyContent: 'space-between',
}));

const ShowMenu = styled('div')(({ theme }) => ({
  margin: theme.spacing(2),
  position: 'fixed',
  bottom: 40,
  left: 20,
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
        <CustomersList />
      </Container>
      <ShowMenu>
        <Fab color='primary' aria-label='Menu'>
          <MenuIcon />
        </Fab>
      </ShowMenu>
    </Box>
  );
};

export default Dashboard;
