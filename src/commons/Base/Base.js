import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MAX_WIDTH } from './styles';

const Base = ({ children }) => (
  <React.Fragment>
    <CssBaseline />

    <Container component="main" maxWidth={MAX_WIDTH}>
      { children }
    </Container>
  </React.Fragment>
);

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
