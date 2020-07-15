/* eslint-disable */
import React from 'react';
import Countdown from 'react-countdown-now';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Section from '../../../commons/Section';
import Ticket from '../../../commons/Ticket';

import Typed from '../../../components/Typed';

/**
 * @todo Move `DATE` to configuration file.
 */
const DATE = 'Sat, 18 Jul 2020';

const Hero = () => (
  <Section>
    <Grid container direction="row" justify="center">
      <Grid item xs="auto" style={{ textAlign: 'center' }}>
        <Typed component="p" paragraph variant="h2" content={[
          '#saveTheDate',
          'Front In Sampa 2020',
        ]} />

        <Typography component="p" paragraph variant="h5" color="textSecondary">
          18 de Julho |&nbsp;
          <Link
            href="/"
            underline="none"
            color="inherit"
          >
            youtube.com/frontinsampa
          </Link>
        </Typography>

        <Box mt={5} mb={5}>
          <Typography component="p" variant="h2" color="textSecondary">
            <Countdown date={new Date(DATE)} zeroPadTime={2} daysInHours />
          </Typography>
        </Box>

        <Ticket width={230}>
          Faça sua inscrição
        </Ticket>
      </Grid>
    </Grid>
  </Section>
);

export default Hero;
