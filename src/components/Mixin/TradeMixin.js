import React from 'react';
import TradeStore from '../../store/TradeStore';

let TradeMixin = ComposedComponent => class extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        trades: TradeStore.selectAll()
      };
      this._onTradesChange = this._onTradesChange.bind(this);
    }

    componentDidMount() {
      TradeStore.addChangeListener(this._onTradesChange);
    }

    componentWillUnmount() {
      TradeStore.removeChangeListener(this._onTradesChange);
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} />;
    }

    _onTradesChange() {
      this.setState({trades: TradeStore.selectAll()})
    }
};

export default TradeMixin;
