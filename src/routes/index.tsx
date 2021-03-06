import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
