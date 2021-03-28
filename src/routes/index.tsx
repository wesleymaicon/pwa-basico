import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Geolocation from '../pages/Geolocation';
import StreamAPI from '../pages/StreamAPI';
import CameraAPI from '../pages/CameraAPI';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/geolocation" component={Geolocation} />
    <Route exact path="/stream-api" component={StreamAPI} />
    <Route exact path="/camera" component={CameraAPI} />
  </Switch>
);

export default Routes;
