import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Registration, HashUrl } from './containers';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/' component={HashUrl} />
      </Switch>
    </Router>
  );
}

export default App;
