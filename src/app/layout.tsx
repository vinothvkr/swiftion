'use client';
import ThemeProvider from '@/theme';
import type { Metadata } from 'next';
import Header from './header';
import Box from '@mui/material/Box';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { SettingsProvider } from '@/components/settings/SettingsContext';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    restSpeed: 0.001,
  });

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <SettingsProvider>
            <ThemeProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
                <motion.div
                  style={{
                    left: 0,
                    position: 'fixed',
                    width: '100%',
                    height: 5,
                    background: theme.palette.primary.main,
                    scaleX,
                    transformOrigin: '0% 0%',
                    zIndex: 1999,
                  }}
                />
              </Box>
              <Header />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  pt: { xs: 8, md: 11 },
                }}
              >
                {children}
              </Box>
            </ThemeProvider>
          </SettingsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
