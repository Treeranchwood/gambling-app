/**
 * Mui theme's that uses palettes which work to change the primary and secondary colours
 */

import { createTheme } from '@mui/material/styles';

/**
 * Light theme code and colours
 * @type {Object} contains the material ui light theme
 */
export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
  },
});

/**
 * Dark theme code with darker colour palette
 * @type {Object} contains the material ui dark theme
 */
export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3F51B5', 
      light: '#757de8',
      dark: '#002984',  
    },
    secondary: {
      main: '#00BCD4',
      light: '#5edbe2',
      dark: '#008ba3',
    },
    background: {
      default: '#121212', 
      paper: '#1E1E1E', 
    },
    text: {
      primary: '#E0E0E0', 
      secondary: '#BDBDBD', 
    },
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
});