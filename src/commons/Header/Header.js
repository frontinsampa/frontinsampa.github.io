import uuid from 'uuid/v4';

import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Svg from '../../components/Svg';

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

const Header = ({ classes }) => (
  <AppBar className={classes.header} position="fixed">
    <Toolbar>
      <Grid component="header" container justify="space-evenly">
        <Grid item xs="auto">
          <Link href="/" underline="none">
            <Svg src="/assets/images/logo-header.svg" fallback="/assets/images/logo-header.png" a11y={{
              title: 'Logo do Front In Sampa',
              description: 'Contém o nome do evento escrito com o ano de 2019 no final e 3 faixas coloridas alinhados embaixo, vermelho, amarelo e roxo, que fazem referência ao mini mapa de editores de texto famosos como Sublime, Atom e Visual Studio Code.',
            }} />
          </Link>
        </Grid>

        <Grid component="nav" item xs="auto">
          <Grid component="ul" className={classes.headerMenu} container spacing={4}>
            {
              MENU.map(item => (
                <Grid component="li" item xs="auto" key={uuid()}>
                  <Typography component="span">
                    <Link href={item.src} aria-label={item.a11y} color="inherit" underline="none">
                      { item.label }
                    </Link>
                  </Typography>
                </Grid>
              ))
            }
          </Grid>
        </Grid>

        <Grid item xs="auto">
          <Ticket width={150} height={40}>Inscrever-se</Ticket>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
