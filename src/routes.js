import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route to="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;