import React from 'react';
import PropTypes from 'prop-types';
import { useCountUp } from 'react-countup';

import { withStyles } from '../../styles';

import styles from './styles';

const CountUp = ({ number, posfix }) => {
  const { countUp } = useCountUp({
    end: number,
    duration: 2,
  });

  return (
    <React.Fragment>
      { countUp + posfix }
    </React.Fragment>
  );
};

CountUp.propTypes = {
  number: PropTypes.number.isRequired,
  posfix: PropTypes.string,
};

CountUp.defaultProps = {
  posfix: '',
};

export default withStyles(styles)(CountUp);
