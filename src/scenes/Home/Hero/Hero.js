import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Section from '../../../commons/Section';
import Ticket from '../../../commons/Ticket';

import { withStyles } from '../../../styles';

import styles from './styles';

const Hero = () => (
  <Section>
    <Grid component="section" container direction="row" justify="center">
      <Grid item xs="auto">
        <Typography variant="h2">Se prepare para o <big>Front In Sampa 2019</big></Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officia debitis maxime nam dignissimos perspiciatis aspernatur expedita.</p>

        <div>Countdown</div>

        <Ticket />
      </Grid>
    </Grid>
  </Section>
);

export default withStyles(styles)(Hero);
