import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import { RegistrationMobile } from './containers';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/hash' component={App} />
        <Route exact path='/' component={RegistrationMobile} />
      </Switch>
    </Router>
  );
};

export default Routes;
