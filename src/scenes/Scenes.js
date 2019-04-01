import React from 'react';

import Base from '../commons/Base';

import Home from './Home';

import { withTheme } from '../styles';

const Scenes = () => (
  <Base>
    <Home />
  </Base>
);

export default withTheme('standard')(Scenes);
