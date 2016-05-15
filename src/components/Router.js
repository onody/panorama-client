import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from './Page/Home'
import About from './Page/About'
import ChartActions from '../actions/ChartActions'
import TradeActions from '../actions/TradeActions'
// import InitializeActions from '../actions/InitializeActions'

class Common extends React.Component {

  componentWillMount(){
    ChartActions.pull();
    TradeActions.pull();

    this.interval = setInterval(function(){ ChartActions.pull() }, 1800000); // 30分
    this.interval = setInterval(function(){ TradeActions.pull() }, 300000);  // 15分
  }

  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top navbar-transparent">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">Panorama</a>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
var router = (
  <div>
    <Common />
    <Router history={browserHistory} >
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
    </Router>
  </div>
);

export default router;
