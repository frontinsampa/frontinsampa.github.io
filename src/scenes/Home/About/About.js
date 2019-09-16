import React from 'react';

import Box from '@material-ui/core/Box';

import Typography from '../../../components/Typography';

import Section from '../../../commons/Section';

const About = () => (
  <Section title="O evento" titleCustomColor="sunrise">
    <Box mb={6}>
      <Typography component="p" paragraph variant="h5">
        O <Box component="strong" color="sunrise" fontWeight="normal">Front In Sampa é o tradicional evento de Front-End</Box> sediado em São Paulo com 8 edições de sucesso desde 2012. Com o posto de maior do Brasil no seguimento e bem aclamado pelo público da área, trazemos conteúdo de alta qualidade aliado a uma experiência incrível do início ao fim, sempre pensando na inclusão, no aprendizado e na diversão.
      </Typography>
    </Box>
  </Section>
);

export default About;
