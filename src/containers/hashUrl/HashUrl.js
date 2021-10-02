import React from 'react';
import { HashUrlForm, Layout } from '../../components';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';

const HashUrlFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    maxWidth: '70%',
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '40%',
    flex: 'none',
  },
  borderRadius: 10,
  margin: 'auto',
}));

const HashUrl = () => {
  return (
    <Layout>
      <HashUrlFormContainer>
        <HashUrlForm />
      </HashUrlFormContainer>
    </Layout>
  );
};

export default HashUrl;
