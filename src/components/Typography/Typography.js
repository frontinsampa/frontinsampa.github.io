import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '../../styles';

import styles from './styles';

/**
 * @todo Is it really necessary?
 * @todo Check `customColor` property.
 */
const TypographyCustom = ({ classes, customColor, ...props }) => (
  <Typography className={classes.typography} {...props} />
);

TypographyCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  customColor: PropTypes.string,
};

TypographyCustom.defaultProps = {
  customColor: null,
};

export default withStyles(styles)(TypographyCustom);
