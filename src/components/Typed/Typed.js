import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import TypedJs from 'typed.js';
import Typography from '@material-ui/core/Typography';

const Typed = ({ content, ...props }) => {
  const $content = useRef();

  useEffect(() => {
    new TypedJs($content.current, {
      strings: content,
      typeSpeed: 40,
      backSpeed: 20,
    });
  });

  return (
    <Typography {...props}>
      <span ref={$content} aria-hidden="true" />
    </Typography>
  );
};

Typed.propTypes = {
  content: PropTypes.array.isRequired,
};

export default Typed;
