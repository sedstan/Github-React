import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DataContainer from './DataContainer';


const history = createBrowserHistory();

const AppContainer = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={DataContainer} />
    </Switch>
  </Router>
);

export default AppContainer;
