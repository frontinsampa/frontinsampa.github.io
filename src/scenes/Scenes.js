import React from 'react';

import Base from '../commons/Base';

import { withTheme } from '../styles';

const Scenes = () => (
  <Base>
    <div>Hello World</div>
  </Base>
);

export default withTheme('standard')(Scenes);