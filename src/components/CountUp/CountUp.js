import React from 'react';
import PropTypes from 'prop-types';
import { useCountUp } from 'react-countup';

import { withStyles } from '../../styles';

import styles from './styles';

const CountUp = ({ number, prefix, posfix }) => {
  const { countUp } = useCountUp({
    end: number,
    duration: 2,
  });

  return (
    <>
      {prefix + countUp + posfix}
    </>
  );
};

CountUp.propTypes = {
  number: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  posfix: PropTypes.string,
};

CountUp.defaultProps = {
  posfix: '',
  prefix: '',
};

export default withStyles(styles)(CountUp);
