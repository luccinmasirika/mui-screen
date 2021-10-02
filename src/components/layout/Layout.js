import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';
import { Paper } from '@mui/material';

const Root = styled('main')(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
  background: grey[200],
  minHeight: '100vh',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const LayoutContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    maxWidth: '70%',
    padding: `${theme.spacing(2)} 9%`,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '40%',
    flex: 'none',
  },
  borderRadius: 10,
  margin: 'auto',
}));

const Layout = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Layout;
