import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import { withStyles } from '../../styles';

import styles from './styles';

const SpotBar = ({ classes, children }) => {
  const handleFocus = ({ target }) => {
    target.classList.add('actived');
  };

  const handleBlur = ({ target }) => {
    target.classList.remove('actived');
  };

  return (
    <div className={classes.spotBar} tabIndex="0" onFocus={handleFocus} onBlur={handleBlur} role="textbox">
      <Box className={classes.spotBarContent} padding={3}>
        <div>
          { children }
        </div>
      </Box>
    </div>
  );
};

SpotBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(SpotBar);
