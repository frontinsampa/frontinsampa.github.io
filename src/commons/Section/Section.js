import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '../../styles';

import styles from './styles';

const Section = ({ classes, title, children }) => {
  const $title = useRef();

  return (
    <Grid container className={classes.section} justify="center">
      <Grid item xs={10}>
        { title && (
          <div className={classes.sectionType}>
            <h2 className={classes.sectionTypeTitle} ref={$title} />
          </div>
        ) }

        { children }
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Section);
