import React from 'react'
import ChartMixin from '../Mixin/ChartMixin'
import Table from '../Table/Table'
import Chart from '../Chart/Chart'


class Home extends React.Component {
  constructor(props) {
    super(props)
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
