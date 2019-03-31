import React from 'react';
import { ThemeProvider } from 'react-jss';
import deepmerge from 'deepmerge';

import createTheme from './createTheme';

import globals from './themes/globals';
import standard from './themes/collections/standard';

const themes = {
  standard,
};

/**
 * @param {string} name
 */
const provideTheme = (name) => {
  const theme = createTheme(deepmerge(globals, themes[name]));

  return Component => ({ ...props }) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default provideTheme;
