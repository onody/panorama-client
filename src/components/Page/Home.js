import React from 'react'
import ChartMixin from '../Mixin/ChartMixin'
import Table from '../Table/Table'
import Chart from '../Chart/Chart'

import ChartActions from '../../actions/ChartActions'
import TradeActions from '../../actions/TradeActions'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    ChartActions.pull();
    TradeActions.pull();

    this.interval = setInterval(function(){ ChartActions.pull() }, 1800000); // 30分
    this.interval = setInterval(function(){ TradeActions.pull() }, 300000);  // 15分
  }
  render() {
    return (
      <div className="row">
        <Chart />
        <Table />
      </div>
    );
  }
}

export default Home
