import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, useRouterHistory } from 'react-router'

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import Home from './Page/Home'
import About from './Page/About'
import Vendor from './Page/Vendor'
import TradeActions from '../actions/TradeActions'

class App extends React.Component {
  componentWillMount(){
    TradeActions.pull();
    this.interval = setInterval(function(){ TradeActions.pull() }, 300000);  // 15分
  }
  render() {
    return (
      <div id="wrapper">
        <div className="navbar navbar-default navbar-fixed-top navbar-transparent">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Panorama</Link>
            </div>
            <div className="navbar-collapse collapse" id="navbar-main">
              <ul className="nav navbar-nav navbar-left">
                <li><Link to="/vendors/1" activeClassName="active">bitFlyer</Link></li>
                <li><Link to="/vendors/2" activeClassName="active">Zaif</Link></li>
                <li><Link to="/vendors/3" activeClassName="active">coincheck</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/about" activeClassName="active">About</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="vendors/:vendor_id" component={Vendor}/>
    </Route>
  </Router>
), document.getElementById('content'))
