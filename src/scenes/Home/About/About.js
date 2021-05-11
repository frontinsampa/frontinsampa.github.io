import React from 'react';

import Box from '@material-ui/core/Box';

import Typography from '../../../components/Typography';

import Section from '../../../commons/Section';

const About = () => (
  <Section title="O evento" titleCustomColor="sunrise">
    <Box mb={6}>
      <Typography component="p" paragraph variant="h5">
        <Box component="strong" color="sunrise" fontWeight="normal">10 anos transformando a comunidade Front-End</Box>
        <p>O Front In Sampa é um dos maiores eventos de tecnologia front end do Brasil. Criado em 2012, tem como missão oferecer experiências para a comunidade de desenvolvedoras através de palestras e atividades, levando conteúdo de qualidade e transformação social entre pessoas e organizações.</p>
      </Typography>
    </Box>
  </Section>
);

export default About;
