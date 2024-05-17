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

const common = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: {
    ...neonBlue,
    light: neonBlue[400],
    main: neonBlue[500],
    dark: neonBlue[600],
  },
  secondary: {
    ...nevada,
    light: nevada[600],
    main: nevada[700],
    dark: nevada[800],
  },
  info: {
    ...shakespeare,
    light: shakespeare[400],
    main: shakespeare[500],
    dark: shakespeare[600],
  },
  success: {
    ...kepple,
    light: kepple[400],
    main: kepple[500],
    dark: kepple[600],
  },
  warning: {
    ...california,
    light: california[400],
    main: california[500],
    dark: california[600],
  },
  error: {
    ...redOrange,
    light: redOrange[400],
    main: redOrange[500],
    dark: redOrange[600],
  },
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...common,
    mode: 'light',
    action: { disabledBackground: 'rgba(0, 0, 0, 0.06)' },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      neutral: stormGrey[200],
    },
    dividerChannel: '220 223 228',
    neutral: { ...stormGrey },
    text: {
      primary: nevada[900],
      primaryChannel: '33 38 54',
      secondary: stormGrey[500],
      secondaryChannel: '102 112 133',
      disabled: stormGrey[400],
    },
  } as const;

  const dark = {
    ...common,
    mode: 'dark',
    action: { disabledBackground: 'rgba(0, 0, 0, 0.12)' },
    background: {
      default: '#212121',
      paper: stormGrey[800],
      neutral: stormGrey[500],
    },
    dividerChannel: '50 56 62',
    neutral: { ...nevada },
    text: {
      primary: stormGrey[100],
      primaryChannel: '240 244 248',
      secondary: stormGrey[400],
      secondaryChannel: '159 166 173',
    },
    secondary: {
      ...nevada,
      light: nevada[100],
      main: nevada[200],
      dark: nevada[300],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
