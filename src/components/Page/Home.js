import React from 'react'
import ChartMixin from '../Mixin/ChartMixin'
import Table from '../Table/Table'
import TradeActions from '../../actions/TradeActions'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    TradeActions.unfilter('vendor_id');
  }
  render() {
    return (
      <div className="row">
        <Table />
      </div>
    );
  }
}

export default Home
