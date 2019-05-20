import React from 'react';
import PropTypes from 'prop-types';

import InlineSvg from 'react-inlinesvg';

const Svg = ({ src, fallback, a11y }) => {
  return (
    <InlineSvg src={src} title={a11y.title} description={a11y.description}>
      <img src={src} srcSet={`${fallback} 2x`} alt={a11y.title} />
    </InlineSvg>
  );
};

Svg.propTypes = {
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  a11y: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    hidden: PropTypes.bool,
  }).isRequired,
};

export default Svg;
