import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../../styles';

import styles from './styles';

const Spot = ({ classes, children }) => (
  <div className={classes.spot}>
    { children }
  </div>
);

Spot.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Spot);
