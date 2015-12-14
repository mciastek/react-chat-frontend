import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './Main';
import Login from './Login';
import Dashboard from './Dashboard';

const history = createBrowserHistory();

// Render the main component into the dom
ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="chat" component={Dashboard} />
    </Route>
  </Router>
, document.getElementById('app'));
