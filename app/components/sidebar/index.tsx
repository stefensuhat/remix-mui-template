import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {
  Avatar,
  Box,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'remix';
import routes from '~/utils/routes';

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const router = useLocation();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { drawerWidth } = theme.mixins;

  const handleNavigate = async (route : any) => {
    await navigate(route.path);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant={fullScreen ? 'temporary' : 'persistent'}
        open
        elevation={0}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{
          sx: {
            border: 0,
            backgroundColor: (theme) => theme.palette.grey[100],
          },
        }}
      >
        <Box p={2} display="flex" alignItems="center">
          <Avatar sx={{
            bgcolor: 'primary.main', mr: 1, width: 35, height: 35,
          }}
          >
            S
          </Avatar>

          <Typography variant="subtitle1" fontWeight="600">Dashboard</Typography>
        </Box>

        <Box flexGrow={1} borderBottom={1} borderColor="divider" p={2}>
          <List component="ul" subheader={<li />}>
            {routes.map((route) => {
              const isSelected = route.label === router.pathname;

              return (
                <ListItemButton
                  key={route.label}
                  selected={isSelected}
                  sx={{ borderRadius: 1 }}
                  onClick={() => handleNavigate(route)}
                >
                  <ListItemIcon>
                    <Icon color="primary">{route.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ fontWeight: isSelected ? 600 : 300 }}>
                    {route.label}
                  </ListItemText>
                </ListItemButton>
              );
            })}
          </List>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>

          <Typography variant="subtitle1" sx={{ ml: 1, flexGrow: 1 }}>Stefen Suhat</Typography>

          <IconButton size="small">
            <CircleOutlinedIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
