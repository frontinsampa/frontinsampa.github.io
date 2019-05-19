import merge from 'lodash/merge';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

/**
 * @param {object} props
 */
const createTheme = (...props) => {
  const theme = merge({
    overrides: {},
  }, ...props);

  return responsiveFontSizes(createMuiTheme(theme));
};

export default createTheme;
