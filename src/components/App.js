import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import Home from './Page/Home'
import About from './Page/About'

class App extends React.Component {
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
