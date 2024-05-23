'use client';
import ThemeProvider from '@/theme';
import Header from './header';
import Box from '@mui/material/Box';
import { SettingsProvider } from '@/components/settings/SettingsContext';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ScrollProgress from '@/components/scroll-progress/ScrollProgress';

// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from './footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <SettingsProvider>
            <ThemeProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
                <ScrollProgress />
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
              <Footer />
            </ThemeProvider>
          </SettingsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
