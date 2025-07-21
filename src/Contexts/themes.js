import { createTheme } from '@mui/material/styles';

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Standard Material-UI blue
    },
    secondary: {
      main: '#dc004e', // Standard Material-UI red
    },
  },
});

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // A sophisticated, deep indigo-blue. It's dark enough for primary elements
      // but has more character than a pure black-blue.
      main: '#3F51B5', // Indigo 500
      light: '#757de8', // Lighter variant for hover/focus states
      dark: '#002984',  // Darker variant for active/pressed states
    },
    secondary: {
      // A vibrant, accessible accent color. This bright teal offers excellent
      // contrast against the dark background and primary blue.
      main: '#00BCD4', // Cyan 500
      light: '#5edbe2',
      dark: '#008ba3',
    },
    background: {
      // A very dark, almost black background with a hint of blue.
      // This provides a deep canvas for your content.
      default: '#121212', 
      // Slightly lighter than default, ideal for cards, dialogs, and elevated surfaces.
      // It creates a subtle visual hierarchy.
      paper: '#1E1E1E', 
    },
    text: {
      // Light grey for main text, ensuring good readability against dark backgrounds.
      primary: '#E0E0E0', 
      // Slightly darker grey for secondary text (e.g., captions, helper text),
      // providing a subtle distinction.
      secondary: '#BDBDBD', 
    },
    action: {
      // Opacity levels for various interactive states
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    divider: 'rgba(255, 255, 255, 0.12)', // Subtle white with opacity for dividers
  },
});