import React from 'react'
import Tbody from './Tbody'
import TradeMixin from '../Mixin/TradeMixin'


class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let trades = this.props.trades;

    return (
        <div className="col-xs-10 col-xs-offset-1">
          <div className="page-header">
            <h4>最新板情報</h4>
          </div>
          <table className="table table-striped table-bordered table-condensed">
            <thead>
              <tr>
                <th className="text-center">売り・買い</th>
                <th className="text-center">取引所</th>
                <th className="text-center">金額/BTC</th>
                <th className="text-center">量</th>
                <th className="text-center">取引額</th>
                <th className="text-center">取引日時</th>
              </tr>
            </thead>
            <Tbody trades={trades} />
          </table>
        </div>
    );
  }
}

export default TradeMixin(Table);
