import merge from 'lodash/merge';
import { createMuiTheme } from '@material-ui/core/styles';

/**
 * @param {object} props
 */
const createTheme = (...props) => {
  const theme = merge({
    overrides: {},
  }, ...props);

  return createMuiTheme(theme);
};

export default createTheme;
