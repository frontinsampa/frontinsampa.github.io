import uuid from 'uuid/v4';
import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  src,
  alt,
  presentation,
  a11y,
  width,
  height,
}) => {
  const id = uuid();

  return presentation ? (
    /**
      * For decorative images like icons, illustrations and others.
      */
    <img src={src} alt="" role="presentation" width={width} height={height} />
  ) : (
    <React.Fragment>
      <img src={src} alt={alt} aria-describedby={id} width={width} height={height} />

      <span id={id}>
        { a11y.description }
      </span>
    </React.Fragment>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  presentation: PropTypes.bool,
  a11y: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

Image.defaultProps = {
  presentation: false,
  a11y: null,
  width: 'auto',
  height: 'auto',
};

export default Image;
