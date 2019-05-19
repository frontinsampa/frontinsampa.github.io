import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '../../styles';

import Header from '../Header';
import Footer from '../Footer';

import styles, { MAX_WIDTH } from './styles';

const Base = ({ ...props }) => {
  const { classes, children } = props;

  return (
    <Container maxWidth={MAX_WIDTH}>
      <CssBaseline />

      <Grid className={classes.base} container spacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid component="main" item xs={12}>
          { children }
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

Base.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(Base);
