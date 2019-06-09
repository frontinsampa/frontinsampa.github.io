import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import TypedJs from 'typed.js';
import Typography from '@material-ui/core/Typography';

const Typed = ({ content, a11y, ...props }) => {
  const $content = useRef();

  useEffect(() => {
    /**
     * @todo Check ESLint rule.
     */
    // eslint-disable-next-line no-new
    new TypedJs($content.current, {
      strings: content,
      typeSpeed: 40,
      backSpeed: 20,
    });
  });

  return (
    <React.Fragment>
      {
        /**
         * Apply only the most important content for screen
         * readers from @property `content`.
         */
        a11y.content && (
          <Typography {...props} variant="srOnly">
            {a11y.content}
          </Typography>
        )
      }

      <Typography {...props} aria-hidden={!isEmpty(a11y.content)}>
        <span ref={$content} />
      </Typography>
    </React.Fragment>
  );
};

Typed.propTypes = {
  content: PropTypes.array.isRequired,
  a11y: PropTypes.shape({
    content: PropTypes.string,
  }),
};

Typed.defaultProps = {
  a11y: {
    content: null,
  },
};

export default Typed;
