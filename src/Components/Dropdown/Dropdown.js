
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'rgb(245, 244, 228)',
    },
    secondary: {
      main: 'rgb(245, 244, 228)',
    },
  },
});

export default theme
