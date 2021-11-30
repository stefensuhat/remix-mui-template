import {
  AppBar, Toolbar, Typography, useTheme,
} from '@mui/material';
import React from 'react';

type Props = {
  title: string,
  children?: React.ReactNode;
} & typeof defaultProps;
const defaultProps = {
  children: <div />,
};
const Header = ({ title, children }: Props) => {
  const theme = useTheme();
  const { drawerWidth } = theme.mixins;

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: 'white',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}` },
        border: 0,
        // borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        transition: (theme) => theme.transitions.create('background', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Toolbar>

        {title && <Typography variant="h6" color="textPrimary">{title}</Typography>}

        {children}
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = defaultProps;

export default Header;
