import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Registration, HashUrl } from './containers';
import { CssBaseline } from '@mui/material';

const Routes = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/' component={HashUrl} />
      </Switch>
    </Router>
  );
};

export default Routes;
