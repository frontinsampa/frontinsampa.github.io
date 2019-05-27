import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

const Base = ({ children }) => (
  <main>
    <CssBaseline />

    { children }
  </main>
);

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
