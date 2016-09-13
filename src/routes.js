import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Landing from './pages/Landing';
import Restaurants from './pages/Restaurants';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/restaurants" component={Restaurants} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Route>
);