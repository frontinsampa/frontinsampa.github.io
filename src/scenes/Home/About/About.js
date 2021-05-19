import React from 'react';
import uuid from 'uuid/v4';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '../../../components/Typography';
import Section from '../../../commons/Section';
import CountUp from '../../../components/CountUp';

const ABOUT_HISTORY = [
  {
    number: 7000,
    content: 'participantes',
    color: 'energy',
    a11y: {
      description: 'Mais de 7 mil participantes',
    },
  },
  {
    number: 90,
    content: 'palestrantes',
    color: 'sunrise',
    a11y: {
      description: 'Mais de 90 palestrantes',
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
        <Box component="strong" color="sunrise" fontWeight="normal">10 anos transformando a comunidade Front-End</Box>
        <p>O Front In Sampa é um dos maiores eventos de tecnologia front end do Brasil. Criado em 2012, tem como missão oferecer experiências para a comunidade de desenvolvedoras através de palestras e atividades, levando conteúdo de qualidade e transformação social entre pessoas e organizações.</p>
      </Typography>
    </Box>

    <Typography component="p" paragraph variant="h6">
      Desde de 2012, passaram pelo <Box component="strong" color="sunrise" fontWeight="normal">Front In Sampa</Box>:
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
