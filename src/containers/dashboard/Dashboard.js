import React from 'react';
import { AppBar, CustomersList } from '../../components';
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
} from '@mui/material';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Root = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  flexGrow: 1,
  background: '#000',
}));

const Header = styled('div')(({ theme }) => ({
  margin: `${theme.spacing(6)} 0`,
  display: 'flex',
  justifyContent: 'space-between',
}));

const ShowMenu = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  // position: 'relative',
  // bottom: 40,
  // left: 20,
}));

const Menu = styled(ShowMenu)(({ theme }) => ({
  background: theme.palette.primary.main,
  marginBottom: theme.spacing(10),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  color: '#fff',
  position: ' absolute',
  bottom: 0,
  left: '-10px',
}));

const CustomCheckBox = styled('div')(({ theme }) => ({
  width: 25,
  height: 25,
  background: '#fff',
  borderRadius: 3,
}));

const CustomCheckBoxIcon = styled(CustomCheckBox)(({ theme }) => ({
  background: theme.palette.red.main,
  borderRadius: 3,
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
    <Root>
      <AppBar />
      <Container sx={{ position: 'relative' }}>
        <Header>
          <Button variant='contained'>Add Customer</Button>
          <Button startIcon={<SettingsIcon />}>Settings</Button>
        </Header>
        <CustomersList />

        {showMenu && (
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
        )}

        <ShowMenu elevation={0}>
          <Fab color='primary' aria-label='Menu' onClick={handelToogleMenu}>
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </Fab>
        </ShowMenu>
      </Container>
    </Root>
  );
};

export default Dashboard;
