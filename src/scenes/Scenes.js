import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Base from '../commons/Base';
import Footer from '../commons/Footer';

import Home from './Home';
import CodeOfConduct from './CodeOfConduct';

import { withTheme } from '../styles';

const Scenes = () => (
  <Router>
    <Base>
      <Switch>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>

        <Route path="/code-of-conduct">
          <CodeOfConduct />
        </Route>
      </Switch>
    </Base>
  </Router>
);

export default withTheme('standard')(Scenes);
