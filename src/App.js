import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashUrl, Registration, Login, Dashboard } from './containers';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={HashUrl} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
