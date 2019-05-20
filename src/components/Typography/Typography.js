import React from 'react';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '../../styles';

import styles from './styles';

const TypographyCustom = ({ classes, customColor, ...props }) => (
  <Typography className={classes.typography} {...props} />
);

export default withStyles(styles)(TypographyCustom);
