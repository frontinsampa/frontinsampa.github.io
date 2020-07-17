import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const Footer = () => (
  <Box mb={5}>
    <Grid
      container
      component="footer"
      justify="center"
    >
      <Grid item xs="auto">
        <Link
          component={RouterLink}
          to="/code-of-conduct"
          color="textSecondary"
          variant="body1"
        >
          Código de conduta
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
