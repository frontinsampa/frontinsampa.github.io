import React from 'react';
import Countdown from 'react-countdown-now';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Section from '../../../commons/Section';

import Typed from '../../../components/Typed';

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

        <Typography component="p" color="secondary" variant="h4">
          <p>
            Ingressos em breve
          </p>
        </Typography>

        <Typography component="div" color="textSecondary" variant="h6">
          <div>
            Comemore 10 anos de Front In Sampa e sintonize um dia inteiro de programação gratuita com líderes, influenciadoras, comunidades e empresas reunidas online para aprendizado, networking e entretenimento no YouTube e no Zoom.
          </div>
        </Typography>

        <Typography component="div" color="textSecondary" variant="p">
          <p>
            Assista as edições anteriores em
          </p>
          <Link
            href="https://www.youtube.com/watch?v=0qtRQYS4V5A"
            underline="none"
            color="primary"
            target="_blank"
          >
            youtube.com/frontinsampa
          </Link>
        </Typography>

      </Grid>
    </Grid>
  </Section>
);

export default Hero;
