import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const Footer = () => (
  <Grid
    container
    component="footer"
    justify="center"
  >
    <Grid item xs="auto">
      <Link
        component={RouterLink}
        to="/code-of-conduct"
      >
        Código de conduta
      </Link>
    </Grid>
  </Grid>
);

export default Footer;
