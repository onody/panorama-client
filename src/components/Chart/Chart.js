import React from 'react'
import ChartMixin from '../Mixin/ChartMixin'
import C3Chart from 'react-c3js'


class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let charts = this.props.charts;
    let title  = this.props.title;

    let data = {
      x: 'x',
      xFormat: '%m-%d %H',
      columns: charts
    }
    let axis = {
      x: {
        type: 'timeseries',
        tick: {
          format: '%m-%d %H'
        }
      }
    }

    return (
        <div className="col-xs-10 col-xs-offset-1">
          <div className="page-header">
            <h4>{title}</h4>
          </div>
          <C3Chart data={data} axis={axis} />
        </div>
    );
  }
}

export default ChartMixin(Chart);
