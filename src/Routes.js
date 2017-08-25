import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';

const history = browserHistory;
const Routes = () =>(
  <Router history={browserHistory}>
    <Route path="home" component= {Home}/>
    <Route path="about" component= {About}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

export default Routes;
