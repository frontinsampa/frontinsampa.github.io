import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { withStyles } from '../../styles';

import styles from './styles';

const ButtonSpecial = (props) => {
  /**
   * @todo Filter `otherProps`.
   */
  const {
    classes,
    children,
    custom,
    width,
    ...otherProps
  } = props;

  return (
    <Link color="inherit" underline="none" {...otherProps}>
      <Typography component="span" className={classes.buttonSpecial}>
        <span className={classes.buttonSpecialChildren}>
          { children }
        </span>
      </Typography>
    </Link>
  );
};

ButtonSpecial.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  /**
   * @todo Check `width` and `custom` properties.
   */
  custom: PropTypes.object,
  width: PropTypes.number,
};

ButtonSpecial.defaultProps = {
  custom: {},
  width: 0,
};

export default withStyles(styles)(ButtonSpecial);
