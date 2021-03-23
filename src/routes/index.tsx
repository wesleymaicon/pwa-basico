import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);

export default Routes;
