import CssBaseline from '@mui/material/CssBaseline';
import { SignUpForm } from '../../components';
import { Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';

const Root = styled(Container)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
  background: grey[200],
}));

const SignUpFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 'auto',
}));

const RegistrationMobile = () => {
  return (
    <Root>
      <CssBaseline />
      <SignUpFormContainer elevation={0}>
        <SignUpForm />
      </SignUpFormContainer>
    </Root>
  );
};

export default RegistrationMobile;
