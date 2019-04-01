import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../../styles';

import Header from '../Header';
import Footer from '../Footer';

import styles from './styles';

const Base = ({ ...props }) => {
  const { classes, children } = props;

  return (
    <div>
      <Header />

      <div className={classes.base}>
        { children }
      </div>

      <Footer />
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
