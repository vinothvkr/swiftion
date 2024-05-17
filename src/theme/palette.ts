import { california, kepple, neonBlue, nevada, redOrange, shakespeare, stormGrey } from './colors';

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    mode: 'light',
    action: { disabledBackground: 'rgba(0, 0, 0, 0.06)' },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      neutral: stormGrey[200],
    },
    common: { black: '#000000', white: '#ffffff' },
    dividerChannel: '220 223 228',
    error: {
      ...redOrange,
      light: redOrange[400],
      main: redOrange[500],
      dark: redOrange[600],
      contrastText: 'var(--mui-palette-common-white)',
    },
    info: {
      ...shakespeare,
      light: shakespeare[400],
      main: shakespeare[500],
      dark: shakespeare[600],
      contrastText: 'var(--mui-palette-common-white)',
    },
    neutral: { ...stormGrey },
    primary: {
      ...neonBlue,
      light: neonBlue[400],
      main: neonBlue[500],
      dark: neonBlue[600],
      contrastText: '#ffffff',
    },
    secondary: {
      ...nevada,
      light: nevada[600],
      main: nevada[700],
      dark: nevada[800],
      contrastText: 'var(--mui-palette-common-white)',
    },
    success: {
      ...kepple,
      light: kepple[400],
      main: kepple[500],
      dark: kepple[600],
      contrastText: 'var(--mui-palette-common-white)',
    },
    text: {
      primary: nevada[900],
      primaryChannel: '33 38 54',
      secondary: stormGrey[500],
      secondaryChannel: '102 112 133',
      disabled: stormGrey[400],
    },
    warning: {
      ...california,
      light: california[400],
      main: california[500],
      dark: california[600],
      contrastText: 'var(--mui-palette-common-white)',
    },
  } as const;

  const dark = {
    mode: 'dark',
    action: { disabledBackground: 'rgba(0, 0, 0, 0.12)' },
    background: {
      default: '#212121',
      paper: stormGrey[800],
      neutral: stormGrey[500],
    },
    common: { black: '#000000', white: '#ffffff' },
    dividerChannel: '50 56 62',
    error: {
      ...redOrange,
      light: redOrange[300],
      main: redOrange[400],
      dark: redOrange[500],
      contrastText: 'var(--mui-palette-common-black)',
    },
    info: {
      ...shakespeare,
      light: shakespeare[300],
      main: shakespeare[400],
      dark: shakespeare[500],
      contrastText: 'var(--mui-palette-common-black)',
    },
    neutral: { ...nevada },
    primary: {
      ...neonBlue,
      light: neonBlue[300],
      main: neonBlue[400],
      dark: neonBlue[500],
      contrastText: 'var(--mui-palette-common-black)',
    },
    secondary: {
      ...nevada,
      light: nevada[100],
      main: nevada[200],
      dark: nevada[300],
      contrastText: 'var(--mui-palette-common-black)',
    },
    success: {
      ...kepple,
      light: kepple[300],
      main: kepple[400],
      dark: kepple[500],
      contrastText: 'var(--mui-palette-common-black)',
    },
    text: {
      primary: stormGrey[100],
      primaryChannel: '240 244 248',
      secondary: stormGrey[400],
      secondaryChannel: '159 166 173',
      disabled: 'var(--mui-palette-neutral-600)',
    },
    warning: {
      ...california,
      light: california[300],
      main: california[400],
      dark: california[500],
      contrastText: 'var(--mui-palette-common-black)',
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
