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
    label: 'o evento',
    description: '',
    src: '#',
  },
  {
    label: 'palestrantes',
    description: '',
    src: '#',
  },
  {
    label: 'apresentador',
    description: '',
    src: '#',
  },
  {
    label: 'local',
    description: '',
    src: '#',
  },
  {
    label: 'patrocinio',
    description: '',
    src: '#',
  },
  {
    label: 'apoio',
    description: '',
    src: '#',
  },
  {
    label: 'contato',
    description: '',
    src: '#',
  },
];

const Header = () => (
  <Grid component="header" container>
    <Grid item xs="auto">
      <a href="/">
        <img src="https://via.placeholder.com/150x50&text=LOGO" alt="" />
      </a>
    </Grid>

    <Grid item xs>
      <Grid component="ul" container>
        {
          MENU.map(item => (
            <Grid component="li" item xs key={uuid()}>
              <Typography component="span">
                <Link href={item.src} aria-label={item.description} color="inherit">
                  { item.label }
                </Link>
              </Typography>
            </Grid>
          ))
        }
      </Grid>
    </Grid>

    <Grid item xs="auto">
      <Ticket />
    </Grid>
  </Grid>
);

export default withStyles(styles)(Header);
