import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Layout from './hoc/layout'
import Portfolio from './containers/portfolio'
import Resume from './containers/resume'
import Story from './containers/story'
import Empty from './containers/empty'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/story' component={Story} />
        <Route path='/' exact component={Empty} />
      </Switch>
    </Layout>
  </Router>, document.getElementById('root'))
