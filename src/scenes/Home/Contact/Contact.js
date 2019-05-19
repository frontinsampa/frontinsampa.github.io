import uuid from 'uuid/v4';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Section from '../../../commons/Section';

import { withStyles } from '../../../styles';

import styles from './styles';

const SOCIAL_MEDIA = [
  {
    name: 'Twitter',
    href: '#',
    icon: 'icon',
    a11y: 'Abrir nossa página no Twitter',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'icon',
    a11y: 'Abrir nossa página no Instagram',
  },
  {
    name: 'Facebook',
    href: '#',
    icon: 'icon',
    a11y: 'Abrir nossa página no Facebook',
  },
  {
    name: 'YouTube',
    href: '#',
    icon: 'icon',
    a11y: 'Abrir nossa página no YouTube',
  },
];

const Contact = () => (
  <Section component="footer" title="Contato">
    <Grid container alignItems="center">
      {
        SOCIAL_MEDIA.map(({ name, href, icon, a11y }) => (
          <Grid item xs="auto" key={uuid()}>
            <Link href="/" rel="noopener" aria-label={a11y}>
              { icon }
            </Link>
          </Grid>
        ))
      }
    </Grid>

    <Typography component="p" variant="h3">Quer patrocinar, tirar dúvidas ou mandar sugestões?</Typography>

    <Typography component="p" variant="h4">contato@frontinsampa.com.br</Typography>
  </Section>
);

export default withStyles(styles)(Contact);
