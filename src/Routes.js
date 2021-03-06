import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import App from './pages/App.js'
import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';

const history = browserHistory;
const Routes = () =>(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component= {Home}/>
      <Route path="about" component= {About}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;
