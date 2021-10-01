import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
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
          marginTop: 15,
        },
        input: {
          padding: 5,
          height: '2rem',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: 0,
          height: '2rem',
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
