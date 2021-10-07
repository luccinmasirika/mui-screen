import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      50: blue[50],
      100: blue[100],
      200: blue[200],
    },
    grey: {
      main: grey[200],
      secondary: grey[400],
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontSize: 28,
      fontWeight: 600,
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          padding: 8,
          background: grey[200],
        },
        input: {
          padding: 5,
          height: '1.8rem',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: 0,
          height: '1.8rem',
          padding: '10px 5px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 35px',
        },
      },
    },
  },
});

export default theme;
