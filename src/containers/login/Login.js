import { SignInForm } from '../../components';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Layout } from '../../components';

const SignInFormContainer = styled(Paper)(({ theme }) => ({
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

const Login = () => {
  return (
    <Layout>
      <SignInFormContainer elevation={1}>
        <SignInForm />
      </SignInFormContainer>
    </Layout>
  );
};

export default Login;
