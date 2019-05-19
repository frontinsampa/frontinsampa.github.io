import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '../../styles';

import Header from '../Header';

import styles, { MAX_WIDTH } from './styles';

const Base = ({ ...props }) => {
  const { classes, children } = props;

  return (
    <React.Fragment>
      <CssBaseline />

      <Header />

      <Container component="main" maxWidth={MAX_WIDTH}>
        { children }
      </Container>
    </React.Fragment>
  );
};

Base.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(Base);
