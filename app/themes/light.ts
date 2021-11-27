import { createTheme } from '@mui/material';
import palette from '~/themes/palette';
import shadows from '~/themes/shadows';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    drawerWidth: number,
  }
}

const lightTheme = createTheme({
  shape: { borderRadius: 10 },
  mixins: {
    drawerWidth: 220,
  },
  palette,
  shadows,
  typography: {
    fontFamily: [
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontWeight: 600,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
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
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: '#fcfcfc',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: palette.divider,
        },
      },
    },
  },
});

export default lightTheme;
