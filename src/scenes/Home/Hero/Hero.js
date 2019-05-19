import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Countdown from 'react-countdown-now';

import Section from '../../../commons/Section';
import Ticket from '../../../commons/Ticket';

import { withStyles } from '../../../styles';

import styles from './styles';

/**
 * @todo Move `DATE` to configuration file.
 */
const DATE = 'Sat, 13 Jul 2019';

const Hero = ({ classes }) => (
  <Section>
    <Grid className={classes.hero} container direction="row" justify="center">
      <Grid item xs="auto">
        <Typography component="p" variant="h1">
          <small>Se prepare para o</small> Front In Sampa 2019
        </Typography>

        <Typography component="p" variant="h5">
          13 de Julho | Centro de Convenções Rebouças, São Paulo
        </Typography>

        <Typography component="p" variant="h1">
          <Countdown date={new Date(DATE)} zeroPadTime={2} daysInHours />
        </Typography>

        <Ticket width={210}>Faça sua inscrição</Ticket>
      </Grid>
    </Grid>
  </Section>
);

export default withStyles(styles)(Hero);
