import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Drivers from '../pages/Drivers';
import UpdateDriver from '../pages/UpdateDriver';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Register} />
    <Route path="/drivers" component={Drivers} />
    <Route path="/update" component={UpdateDriver} />
  </Switch>
);

export default Routes;
