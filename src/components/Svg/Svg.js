import React from 'react';
import PropTypes from 'prop-types';

import InlineSvg from 'react-inlinesvg';

import Image from '../Image';

const Svg = ({ src, fallback }) => (
  <InlineSvg src={src}>
    <Image src={fallback} alt="" presentation />
  </InlineSvg>
);

Svg.propTypes = {
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
};

export default Svg;
