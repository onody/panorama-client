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
    ChartActions.pull(null);
    TradeActions.unfilter('vendor_id');
  }
  componentWillReceiveProps(nextProps){
    ChartActions.pull(null);
  }
  render() {
    return (
      <div className="row">
        <Chart title="売買平均価格" />
        <Table />
      </div>
    );
  }
}

export default Home
