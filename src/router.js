import React from 'react'
import { Router, Route, browserHistory } from 'dva/router'

import IndexPage from './routes/IndexPage'
import Dashboard from './routes/Dashboard'
import App from './routes/App'
import Users from './routes/Users'
import About from './routes/About'

function RouterConfig({ history }) {
  return (
    <Router history={browserHistory}>
      <Route name="index" path="/" component={IndexPage} />
      <Route name="main" path="/main" component={App}>
        <Route name="dashboard" path="dashboard" component={Dashboard} />
        <Route name="users" path="users" component={Users} />
        <Route name="about" path="about" component={About} />
      </Route>
    </Router>
  );
}

export default RouterConfig
