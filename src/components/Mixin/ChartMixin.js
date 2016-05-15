import React from 'react';
import ChartStore from '../../store/ChartStore';

let ChartMixin = ComposedComponent => class extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        charts: []
      };
      this._onChartsChange = this._onChartsChange.bind(this);
    }

    componentDidMount() {
      ChartStore.addChangeListener(this._onChartsChange);
    }

    componentWillUnmount() {
      ChartStore.removeChangeListener(this._onChartsChange);
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} />;
    }

    _onChartsChange() {
      this.setState({charts: ChartStore.selectAll()})
    }
};

export default ChartMixin;
