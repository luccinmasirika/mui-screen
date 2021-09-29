import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import { RegistrationMobile } from './components';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route
          exact
          path='/registration-mobile'
          component={RegistrationMobile}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
