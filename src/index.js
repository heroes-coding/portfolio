import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Layout from './hoc/layout'
import Portfolio from './containers/portfolio'
import Resume from './containers/resume'
import Story from './containers/story'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/story' exact component={Story} />
      </Switch>
    </Layout>
  </Router>, document.getElementById('root'))
