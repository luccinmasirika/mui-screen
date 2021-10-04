import { styled } from '@mui/system';

const Root = styled('main')(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
  background: theme.palette.grey[200],
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Layout = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Layout;
