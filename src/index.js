import 'typeface-roboto-mono';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Scenes from './scenes';

import store from './store';

render(
  <Provider store={store}>
    <Scenes />
  </Provider>,
  document.getElementById('root'),
);

store.subscribe(() => console.log('store:', store.getState()));
