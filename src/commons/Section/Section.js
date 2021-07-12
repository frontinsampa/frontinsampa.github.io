import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import stringToFunctionStyle from '../../utils/stringToFunctionStyle';

import Typed from '../../components/Typed';

import { withStyles } from '../../styles';

import styles from './styles';

/**
 * @todo Creates Progress component.
 */
const Section = ({
  classes,
  component,
  children,
  title,
  collapsed,
  progress,
}) => (
  <Container maxWidth={collapsed ? 'xl' : 'lg'} className={classes.section}>
    <Grid component={component} container className={classes.sectionContainer} justify="center" alignItems="center">
      {
        progress ? (
          <Grid item xs={collapsed ? 'auto' : 10}>
            {
              title && (
                <>
                  <Typed component="h2" className={classes.sectionTitle} variant="h5" content={[stringToFunctionStyle(title)]} a11y={{ content: title }} />
                </>
              )
            }

            {children}
          </Grid>
        ) : (
          <Grid item>
            <CircularProgress />
          </Grid>
        )
      }
    </Grid>
  </Container>
);

Section.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
  title: PropTypes.string,
  component: PropTypes.string,
  progress: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

Section.defaultProps = {
  collapsed: false,
  title: null,
  component: 'section',
  progress: true,
};

export default withStyles(styles)(Section);
