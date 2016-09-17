import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Landing from './pages/Landing';
import RestaurantsList from './pages/RestaurantsList';
import Restaurant from './pages/Restaurant'
import Categories from './pages/Categories'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/categories" component={Categories} />
    <Route path="/restaurants" component={RestaurantsList} />
    <Route path="/restaurants/:id" component={Restaurant} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Route>
);
