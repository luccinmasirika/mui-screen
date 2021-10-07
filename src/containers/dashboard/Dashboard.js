import React from 'react';
import { AppBar, CustomersList } from '../../components';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import {
  Checkbox,
  Container,
  Fab,
  Grow,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled('div')(({ theme }) => ({
  margin: `${theme.spacing(6)} 0`,
  display: 'flex',
  justifyContent: 'space-between',
}));

const ShowMenu = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  position: 'fixed',
  bottom: 40,
  left: 20,
}));

const Menu = styled(ShowMenu)(({ theme }) => ({
  background: theme.palette.primary.main,
  marginBottom: theme.spacing(10),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  color: '#fff',
}));

const CustomCheckBox = styled('div')(({ theme }) => ({
  width: 25,
  height: 25,
  background: '#fff',
}));

const CustomCheckBoxIcon = styled(CustomCheckBox)(({ theme }) => ({
  background: theme.palette.primary.main,
  border: '3px solid white',
}));

const Dashboard = () => {
  const [checked, setChecked] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(false);

  const handleToggleCheckbox = (value) => () => {
    setChecked(value);
  };

  const handelToogleMenu = () => {
    setShowMenu(!showMenu);
  };

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
      <Grow in={showMenu}>
        <Menu elevation={6}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleToggleCheckbox(1)}
                role={undefined}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    icon={<CustomCheckBox />}
                    checkedIcon={<CustomCheckBoxIcon />}
                    edge='start'
                    tabIndex={-1}
                    checked={checked === 1}
                  />
                </ListItemIcon>
                <ListItemText primary='Customers' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleToggleCheckbox(2)}
                role={undefined}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    icon={<CustomCheckBox />}
                    checkedIcon={<CustomCheckBoxIcon />}
                    edge='start'
                    tabIndex={-1}
                    checked={checked === 2}
                  />
                </ListItemIcon>
                <ListItemText primary='Analitics' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleToggleCheckbox(3)}
                role={undefined}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    icon={<CustomCheckBox />}
                    checkedIcon={<CustomCheckBoxIcon />}
                    edge='start'
                    tabIndex={-1}
                    checked={checked === 3}
                  />
                </ListItemIcon>
                <ListItemText primary='Media' />
              </ListItemButton>
            </ListItem>
          </List>
        </Menu>
      </Grow>
      <ShowMenu elevation={0}>
        <Fab color='primary' aria-label='Menu' onClick={handelToogleMenu}>
          {showMenu ? <CloseIcon /> : <MenuIcon />}
        </Fab>
      </ShowMenu>
    </Box>
  );
};

export default Dashboard;
