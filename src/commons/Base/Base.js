import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '../../styles';

import Header from '../Header';

import styles, { MAX_WIDTH } from './styles';

const Base = ({ classes, children }) => (
  <React.Fragment>
    <CssBaseline />

    <Header />

    <Container component="main" maxWidth={MAX_WIDTH}>
      { children }
    </Container>
  </React.Fragment>
);

export default withStyles(styles)(Base);
