'use client';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import useScreenDetector from '@/hooks/useScreenDetector';
import useOffSetTop from '@/hooks/useOffSetTop';
import { HEADER, MAIN_SITE_URL } from '@/config';
import RouterLink from 'next/link';
import dynamic from 'next/dynamic';

const ThemeModeSwitch = dynamic(() => import('@/components/theme-mode-switch/ThemeModeSwitch'), {
  ssr: false,
});

const Logo = dynamic(() => import('@/components/logo/Logo'), {
  ssr: false,
});

const drawerWidth = 240;

export default function Header() {
  const theme = useTheme();
  const { isDesktop } = useScreenDetector();
  const isOffset = useOffSetTop();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo sx={{ my: 1 }} />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href={MAIN_SITE_URL}>
            <ListItemText primary="Back to VinothVKR" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href="/">
            <ListItemText primary="Home" sx={{ textTransform: 'uppercase' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ backgroundColor: 'transparent', backgroundImage: 'none', boxShadow: '0' }}>
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.MOBILE,
              md: HEADER.DESKTOP,
            },
            transition: theme.transitions.create(['height', 'background-color'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(isOffset && {
              // ...bgBlur({ color: theme.palette.background.default }),
              backdropFilter: 'blur(6px)',
              height: {
                md: HEADER.DESKTOP - 20,
              },
            }),
          }}
        >
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Logo showBlog />
            {isDesktop && (
              <Stack direction="row" spacing={2} sx={{ ml: 3 }}>
                <Button
                  color="secondary"
                  sx={{ textTransform: 'none', fontSize: '16px' }}
                  href={MAIN_SITE_URL}
                >
                  Back to VinothVKR
                </Button>
              </Stack>
            )}
            <Box flexGrow="1" />
            <Box sx={{ mr: { xs: 2, md: 0 } }}>
              <ThemeModeSwitch />
            </Box>
            {isDesktop && (
              <Stack direction="row" spacing={2}>
                <Button color="secondary" sx={{ fontSize: '16px' }} component={RouterLink} href="/">
                  Home
                </Button>
              </Stack>
            )}
            {!isDesktop && (
              <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <IconMenu2 />
              </IconButton>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: theme.palette.background.default,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
