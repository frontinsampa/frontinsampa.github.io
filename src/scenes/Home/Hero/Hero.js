import React from 'react';
import Countdown from 'react-countdown-now';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Section from '../../../commons/Section';
import Ticket from '../../../commons/Ticket';
import Typed from '../../../components/Typed';
import Youtube from '../../../assets/images/yt_logo_rgb_dark.png';

/**
 * @todo Move `DATE` to configuration file.
 */
const DATE = 'Sat, 17 Jul 2021';

const Hero = () => (
  <Section>
    <Grid container direction="row" justify="center">
      <Grid item xs="auto" style={{ textAlign: 'center' }}>
        <Typed component="p" paragraph variant="h2" content={[
          '#saveTheDate',
          'Front In Sampa ON 2021',
        ]} />

        <Typography component="p" paragraph variant="h5" color="textSecondary">
          17 de Julho
        </Typography>

        <Box mt={5} mb={5}>
          <Typography component="p" variant="h2" color="textSecondary">
            <Countdown date={new Date(DATE)} zeroPadTime={2} daysInHours />
          </Typography>
        </Box>

        <Ticket width={230}>
          Faça sua inscrição
        </Ticket>

        <Box mt={5} mb={5}>
          <Typography component="p" color="textSecondary" variant="h5">
            <p>
              Comemore 10 anos de Front In Sampa: sintonize nossa programação gratuita com líderes, influenciadoras, comunidades e empresas.
            </p>
          </Typography>
        </Box>

        <Box mt={5} mb={5}>
          <img src={Youtube} alt="logo youtube" style={{ width: 200 }} />
        </Box>
        <Link
          href="/youtube"
          underline="none"
          variant="h4"
          color="secondary"
          target="_blank"
        >
          frontinsampa.com.br/youtube
        </Link>

      </Grid>
    </Grid>
  </Section>
);

export default Hero;
