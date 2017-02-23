import React from 'react'
import { Router, Route } from 'dva/router'

import IndexPage from './routes/IndexPage'
import Dashboard from './routes/Dashboard'
import App from './routes/App'
import Users from './routes/Users'
import About from './routes/About'

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route name="主页" path="/" component={IndexPage} />
      <Route name="管理系统" path="/main" component={App}>
        <Route name="仪表盘" path="dashboard" component={Dashboard} />
        <Route name="用户管理" path="users" component={Users} />
        <Route name="关于" path="about" component={About} />
      </Route>
    </Router>
  );
}

export default RouterConfig
