import React from 'react'
import ChartMixin from '../Mixin/ChartMixin'
import Table from '../Table/Table'

class Home extends React.Component {
  constructor(props) {
    super(props)
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
