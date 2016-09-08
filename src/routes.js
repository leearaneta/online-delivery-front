import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

//import Profile from './pages/Profile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Route>
);


//<Route path="/dashboard" component={Dashboard} />
//<Route path="/profile" component={Profile} />