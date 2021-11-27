import { createTheme, darkScrollbar } from '@mui/material';
import { range } from 'lodash';
import { ColorPartial } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    black?: ColorPartial,
  }
}

const theme = createTheme({
  shape: { borderRadius: 8 },
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(106, 143, 255)',
    },
    secondary: {
      main: '#00CF99',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9A00',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#00CF99',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E84855',
    },
    black: {
      100: '#ECECEC',
      200: '#CFCFCF',
      300: '#B1B1B1',
      400: '#777777',
      500: '#3D3D3D',
      600: '#373737',
      700: '#252525',
      800: '#1B1B1B',
      900: '#121212',
    },
    grey: {
      100: '#FAFAFA',
      200: '#F2F2F2',
      300: '#EBEBEB',
      400: '#DBDBDB',
      500: '#CCCCCC',
      600: '#B8B8B8',
      700: '#7A7A7A',
      800: '#5C5C5C',
      900: '#3D3D3D',
    },
    background: {
      paper: '#242729',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.60)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    },
  },
  // @ts-ignore
  shadows: range(0, 26).map(() => 'none'),
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'Arial',
    ].join(','),
    fontWeightMedium: 600,
    fontWeightBold: 900,
    subtitle2: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 600,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontWeight: 600,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          elevation: 1,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

export default theme;
