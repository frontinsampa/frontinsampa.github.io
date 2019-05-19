import React from 'react';
import Typography from '@material-ui/core/Typography';

import ButtonSpecial from '../../components/ButtonSpecial';

import { withStyles } from '../../styles';

import styles from './styles';

const SALES_PAGE = 'https://www.sympla.com.br/front-in-sampa-2019__413970';

const Ticket = ({ classes, children, width, height }) => {
  const otherProps = {
    width,
    height,
    custom: {
      color: 'sunset',
      background: 'tar',
    },
  };

  return (
    <ButtonSpecial href={SALES_PAGE} aria-label="Abrir nossa página de inscrição no Sympla." target="_blank" rel="noopener" {...otherProps}>
      { children }
    </ButtonSpecial>
  );
};

export default withStyles(styles)(Ticket);
