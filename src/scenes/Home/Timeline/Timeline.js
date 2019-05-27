import uuid from 'uuid/v4';
import React from 'react';

import Box from '@material-ui/core/Box';

import Typography from '../../../components/Typography';

import Section from '../../../commons/Section';

/**
 * @todo Move `TIMELINE_LIST` to configuration file.
 */
const TIMELINE_LIST = [
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

const Timeline = () => (
  <Section>
    <Typography component="p" variant="h4" paragraph>
      1 dia, 8 horas de conteúdo, 7 Talks, 2 Lightning Talks, 1 Keynote.
    </Typography>

    <Typography component="p">
      Programação em breve.
    </Typography>
  </Section>
);

export default Timeline;
