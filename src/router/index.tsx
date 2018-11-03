import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../pages/App';
import { Login } from './source';

export default () => (
  <Router>
    <Switch>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);
