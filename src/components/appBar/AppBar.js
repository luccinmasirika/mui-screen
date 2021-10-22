import React from 'react';
import { AppBar as MuiAppBar, Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import { LogoIcon } from '../../components';

const Root = styled(MuiAppBar)(({ theme }) => ({
  background: theme.palette.grey.dark,
}));

const LogoIconContainer = styled(Stack)({
  margin: 'auto',
  width: 35,
  height: 35,
  justifyContent: 'center',
});

const User = styled('div')({
  float: 'right',
});

const AppBar = () => {
  return (
    <Root position='static'>
      <Toolbar>
        <LogoIconContainer>
          <LogoIcon />
        </LogoIconContainer>
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
    </Root>
  );
};

export default AppBar;
