import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import Home from './Page/Home'
import About from './Page/About'
import ChartActions from '../actions/ChartActions'
import TradeActions from '../actions/TradeActions'


class App extends React.Component {
  componentWillMount(){
    ChartActions.pull();
    TradeActions.pull();

    this.interval = setInterval(function(){ ChartActions.pull() }, 1800000); // 30分
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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('content'))
