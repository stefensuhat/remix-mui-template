import React from 'react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import lightTheme from '~/themes/light';

type Props = {
  children: React.ReactElement
};

const ThemeConfig = ({ children } : Props) => (
  <ThemeProvider theme={lightTheme}>
    <StyledEngineProvider>
      <CssBaseline />
      {children}
    </StyledEngineProvider>
  </ThemeProvider>
);

export default ThemeConfig;
