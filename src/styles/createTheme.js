import deepmerge from 'deepmerge';

import themeSchema, { THEME_OVERRIDES_SCHEMA } from './themeSchema';

/**
 * @param {object} props
 */
const createTheme = (props) => {
  const theme = deepmerge({
    overrides: {},
  }, props);

  theme.overrides = themeSchema.parse(theme.overrides, THEME_OVERRIDES_SCHEMA);

  return theme;
};

export default createTheme;
