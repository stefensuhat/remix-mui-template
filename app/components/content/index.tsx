import { styled, Toolbar } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

interface MainContentProps {
  open?: boolean;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<MainContentProps>(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${theme.mixins.drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const Index = ({ children } : Props) => (
  <Main open>
    <Toolbar />

    {children}
  </Main>
);

export default Index;
