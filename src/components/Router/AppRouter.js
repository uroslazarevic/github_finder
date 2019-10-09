import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import { history } from 'utils';
import { NotFound, Home } from 'components';

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect path="*" to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
