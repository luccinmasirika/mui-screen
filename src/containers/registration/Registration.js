import { SignUpForm } from '../../components';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Layout } from '../../components';

const SignUpFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    maxWidth: '70%',
    padding: `${theme.spacing(2)} 8%`,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '40%',
    flex: 'none',
  },
  borderRadius: 10,
  margin: 'auto',
}));

const Registration = () => {
  return (
    <Layout>
      <SignUpFormContainer elevation={1}>
        <SignUpForm />
      </SignUpFormContainer>
    </Layout>
  );
};

export default Registration;
