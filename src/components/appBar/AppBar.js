import React from 'react';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';

const Title = styled(Typography)({
  margin: 'auto',
});

const User = styled('div')({
  float: 'right',
});

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position='static'>
        <Toolbar>
          <Title variant='h6' component='h1'>
            XD
          </Title>
          <User>
            <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </User>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
