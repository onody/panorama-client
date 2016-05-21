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
    let { vendor_id } = this.props.params;

    ChartActions.pull(vendor_id);
    this.interval = setInterval(function(){ ChartActions.pull(vendor_id) }, 1800000); // 30分
    TradeActions.filter('vendor_id', (v) => {
      return v == vendor_id;
    });
  }
  componentWillReceiveProps(nextProps){
    let { vendor_id } = nextProps.params;
    ChartActions.pull(vendor_id);
    TradeActions.filter('vendor_id', (v) => {
      return v == vendor_id;
    });
  }
  render() {
    return (
      <div className="row">
        <Chart title="売買価格" />
        <Table />
      </div>
    );
  }
}

export default Vendor
