import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import createTheme from './createTheme';

import standard from './themes/collections/standard';
import mixins from './themes/collections/mixins';

const themes = {
  standard,
};

/**
 * @param {string} name
 */
const provideTheme = (name) => {
  const theme = createTheme(mixins, themes[name]);

  console.log(theme);

  return Component => ({ ...props }) => (
    <MuiThemeProvider theme={theme}>
      <Component {...props} />
    </MuiThemeProvider>
  );
};

export default provideTheme;
