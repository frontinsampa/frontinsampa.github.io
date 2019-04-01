import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../../styles';

import {
  COLOR_LIVE,
  COLOR_TAR,
  COLOR_ENERGY,
  COLOR_SUNRISE,
  COLOR_SUNSET,
  COLOR_NATURE,
  COLOR_OCEAN,
} from '../../styles/themes/globals';

import styles from './styles';

// eslint-disable-next-line
const Section = ({ classes, background, children }) => {
  return (
    <section className={classes.section && background}>
      { children }
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.shape({}).isRequired,
  background: PropTypes.oneOfType([
    COLOR_LIVE,
    COLOR_TAR,
    COLOR_ENERGY,
    COLOR_SUNRISE,
    COLOR_SUNSET,
    COLOR_NATURE,
    COLOR_OCEAN,
  ]),
};

Section.defaultProps = {
  background: COLOR_TAR,
};

export default withStyles(styles)(Section);
