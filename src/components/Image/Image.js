import uuid from 'uuid/v4';
import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  src,
  alt,
  presentation,
  a11y,
}) => {
  const id = uuid();

  return presentation ? (
    /**
      * For decorative images like icons, illustrations and others.
      */
    <img src={src} srcSet={`${src} 2x`} alt="" role="presentation" />
  ) : (
    <React.Fragment>
      <img src={src} srcSet={`${src} 2x`} alt={alt} aria-describedby={id} />

      <span id={id}>
        { a11y.description }
      </span>
    </React.Fragment>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  presentation: PropTypes.bool,
  a11y: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

Image.defaultProps = {
  presentation: false,
  a11y: null,
};

export default Image;
