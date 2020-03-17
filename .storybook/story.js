import React from 'react';
import { radios } from '@storybook/addon-knobs';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { defaultTheme, darkTheme, ThemeProvider } from '../src/styles';

export const withStory = story => {
  const contentChildren = story(); // call early so Knobs initializes
  // const selectedTheme = radios(
  //   'Select global theme',
  //   { Light: 'light', Dark: 'dark' },
  //   'light',
  //   'global-theme'
  // );

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <div className="contentChildrenWrapper">{contentChildren}</div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export const loadStories = () => {
  const req = require.context('../src', true, /\.stories\.(tsx|ts|mdx|md)$/);
  // Any stories that should be shown first in the menu should be added to this array
  const allExports = [req('./stories/index.stories.mdx')];
  req.keys().forEach(fileName => allExports.push(req(fileName)));
  return allExports;
};
