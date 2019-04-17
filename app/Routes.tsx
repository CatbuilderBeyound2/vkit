import * as React from 'react';
import { Router, Switch, Route } from 'react-router';
const routes = require('./constants/routes.json');
import App from './containers/App';
import HomePage from './containers/HomePage';

export default ({ history }) => (
  <App>
    <Router history={history}>
      <Switch>
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </Router>
  </App>
);
