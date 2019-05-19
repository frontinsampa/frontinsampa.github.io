import uuid from 'uuid/v4';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Ticket from '../Ticket';

import { withStyles } from '../../styles';

import styles from './styles';

const MENU = [
  {
    label: 'O evento',
    a11y: 'Ir para a seção sobre o evento.',
    src: '#',
  },
  {
    label: 'Palestrantes',
    a11y: 'Ir para a seção sobre de palestrantes.',
    src: '#',
  },
  {
    label: 'Apresentador',
    a11y: 'Ir para a seção sobre o apresentador.',
    src: '#',
  },
  {
    label: 'Local',
    a11y: 'Ir para a seção sobre o local.',
    src: '#',
  },
  {
    label: 'Contato',
    a11y: 'Ir para a seção de contato.',
    src: '#',
  },
];

const Header = () => (
  <Grid component="header" container>
    <Grid item xs="auto">
      <Link href="/">
        <img src="https://via.placeholder.com/150x50&text=LOGO" alt="Front In Sampa 2019" aria-label="Logo do evento" />
      </Link>
    </Grid>

    <Grid item xs>
      <Grid component="ul" container>
        {
          MENU.map(item => (
            <Grid component="li" item xs key={uuid()}>
              <Typography component="span">
                <Link href={item.src} aria-label={item.a11y} color="inherit">
                  { item.label }
                </Link>
              </Typography>
            </Grid>
          ))
        }
      </Grid>
    </Grid>

    <Grid item xs="auto">
      <Ticket>Inscrever-se</Ticket>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Header);
