import React from 'react'
import ChartMixin from '../Mixin/ChartMixin'
import Table from '../Table/Table'
import Chart from '../Chart/Chart'
import ChartActions from '../../actions/ChartActions'
import TradeActions from '../../actions/TradeActions'

class Vendor extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    let vendor_id = this.props.params.vendor_id;

    // TODO: tableのフィルターがうまくいかないのでなおす。
    // TODO: chartはたぶんデータがないから
    ChartActions.pull(vendor_id);
    this.interval = setInterval(function(){ ChartActions.pull(vendor_id) }, 1800000); // 30分
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

export default Vendor
