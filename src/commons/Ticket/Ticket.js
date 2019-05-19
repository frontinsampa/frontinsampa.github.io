/* eslint-disable */
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '../../styles';

import styles from './styles';

const Ticket = ({ classes }) => (
  <Typography component="a" className={classes.ticket} href="/" aria-label="Ir para a página de inscrição no Sympla." target="_blank">
    <span className={classes.ticketInner}>Inscreva-se</span>
  </Typography>
);

export default withStyles(styles)(Ticket);
