import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../../styles';

import styles from './styles';

const Base = ({ ...props }) => {
  const { classes, children } = props;

  return (
    <div className={classes.base}>
      { children }
    </div>
  );
};

Base.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(Base);
