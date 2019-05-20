import React from 'react';

import Grid from '@material-ui/core/Grid';

import stringToFunctionStyle from '../../utils/stringToFunctionStyle';

import Typed from '../../components/Typed';

import { withStyles } from '../../styles';

import styles from './styles';

const Section = ({ component, classes, title, children }) => (
  <Grid id="test" component={component || 'section'} container className={classes.section} justify="center" alignItems="center">
    <Grid item xs={10}>
      { title && (
        <React.Fragment>
          <Typed component="h2" className={classes.sectionTitle} variant="h5" content={[
            stringToFunctionStyle(title),
          ]} a11y={{ content: title }} />
        </React.Fragment>
      ) }

      { children }
    </Grid>
  </Grid>
);

export default withStyles(styles)(Section);
