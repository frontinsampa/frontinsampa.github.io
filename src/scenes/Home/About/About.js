import uuid from 'uuid/v4';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '../../../components/Typography';
import CountUp from '../../../components/CountUp';

import Section from '../../../commons/Section';

/**
 * @todo Move `ABOUT_HISTORY` to configuration file.
 */
const ABOUT_HISTORY = [
  {
    number: 2000,
    content: 'participantes',
    color: 'energy',
    a11y: {
      description: 'Mais de 2 mil participantes',
    },
  },
  {
    number: 70,
    content: 'palestrantes',
    color: 'sunrise',
    a11y: {
      description: 'Mais de 70 palestrantes',
    },
  },
  {
    number: 30,
    content: 'patrocinadores',
    color: 'sunset',
    a11y: {
      description: 'Mais de 30 patrocinadores',
    },
  },
  {
    number: 70,
    content: 'apoiadores',
    color: 'nature',
    a11y: {
      description: 'Mais de 70 apoiadores',
    },
  },
];

const About = () => (
  <Section title="O evento" titleCustomColor="sunrise">
    <Box mb={6}>
      <Typography component="p" paragraph variant="h5">
        O <Box component="strong" color="sunrise" fontWeight="normal">Front In Sampa é o tradicional evento de Front-End</Box> sediado em São Paulo com 7 edições de sucesso desde 2012. Com o posto de maior do Brasil e bem aclamado pelo público da área, trazemos conteúdo de alta qualidade aliado a uma experiência incrível do início ao fim, sempre pensando na inclusão, no aprendizado e na diversão.
      </Typography>
    </Box>

    <Typography component="p" paragraph variant="h6">
      Desde de 2012 contamos com:
    </Typography>

    <Grid container>
      {
        ABOUT_HISTORY.map(({
          number,
          content,
          color,
          a11y,
        }) => (
          <Grid item xs={12} md={4} key={uuid()}>
            <Box component="p" mb={4}>
              <Typography component="span" variant="h6" aria-label={a11y.description}>
                <Typography component="span" variant="h4" display="block" paragraph customColor={color}>
                  <CountUp number={number} posfix="+" />
                </Typography> {content}
              </Typography>
            </Box>
          </Grid>
        ))
      }
    </Grid>
  </Section>
);

export default About;
