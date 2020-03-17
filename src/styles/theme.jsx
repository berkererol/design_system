import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createMuiTheme } from './createMuiTheme';

// This object mirrors MUIs theme structure, https://material-ui.com/customization/default-theme/
// You can also add custom values to this object and reference them in the components once
// a new theme has been created
// A consumer of the component library would have override the default theme in a similar fashion

const DEFAULT_SHADOW = '0 0 0 1px rgba(0,0,0,0.04), 0 0 10px 0 rgba(0,0,0,0.04)';

export const defaultTheme = {
  palette: {
    error: { main: '#D0021B' },
    info: { main: '#2E74B2' },
    primary: { main: '#5940C3' },
    secondary: { main: '#5940C3' },
    success: { main: '#1B7446' },
    warning: { main: '#C24A00' },
    text: { primary: 'rgba(0, 0, 0, 0.82)' }
  },
  shadows: [
    'none',
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW,
    DEFAULT_SHADOW
  ],
  shape: {
    borderRadius: 3
  },
  typography: {
    fontFamily: 'Montserrat,Helvetica,Arial,sans-serif',
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.75rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    h5: {
      fontSize: '1.25rem'
    },
    h6: {
      fontSize: '1.125rem'
    },
    subtitle1: {
      fontSize: '1rem'
    },
    subtitle2: {
      fontSize: '1rem'
    },
    body1: {
      fontSize: '0.875rem'
    },
    body2: {
      fontSize: '0.75rem'
    },
    button: {
      fontSize: '0.75rem',
      textTransform: 'none'
    }
  }
};

export const darkTheme = {
  ...defaultTheme,
  palette: {
    error: { main: '#D0021B' },
    info: { main: '#2E74B2' },
    primary: { main: '#A48BFF' },
    secondary: { main: '#A48BFF' },
    success: { main: '#1B7446' },
    warning: { main: '#C24A00' },
    text: { primary: '#fff' },
    type: 'dark'
  }
};


export const ThemeProvider = ({ theme = defaultTheme, children }) => {
  return <MuiThemeProvider theme={createMuiTheme(theme)}>{children}</MuiThemeProvider>;
};
