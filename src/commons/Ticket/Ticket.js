import React from 'react';
import PropTypes from 'prop-types';

import ButtonSpecial from '../../components/ButtonSpecial';

import { withStyles } from '../../styles';

import styles from './styles';

const SALES_PAGE = 'https://www.sympla.com.br/front-in-sampa-on-2021__1188186';

const Ticket = ({ children, width, height }) => {
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

Ticket.propTypes = {
  /**
   * @todo Check `width` and `height` properties.
   */
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Ticket.defaultProps = {
  width: 0,
  height: 0,
};

export default withStyles(styles)(Ticket);
