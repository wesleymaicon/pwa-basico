import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Geolocation from '../pages/Geolocation';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/geolocation" component={Geolocation} />
  </Switch>
);

export default Routes;
