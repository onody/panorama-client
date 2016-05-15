import React from 'react'
import TimeUtils from '../../utils/TimeUtils'
import NumUtils from '../../utils/NumUtils'

class Tbody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let trades = this.props.trades;
    let rows = [];

    function showTradeType(text) {
      if(text == "BUY"){
        return <span className="text-info">BUY</span>;
      }else{
        return <span className="text-danger">SELL</span>;
      }
    }

    trades.forEach((el, i) => {
      rows.push(
        <tr key={i}>
          <td className="text-center">{showTradeType(el.trade_type)}</td>
          <td className="text-center">{el.vendor_name}</td>
          <td className="text-right">{NumUtils.cur(el.price)}</td>
          <td className="text-right">{el.amount}</td>
          <td className="text-right">{NumUtils.cur(el.price * el.amount)}</td>
          <td>{TimeUtils.cnv(el.executed_at)}</td>
        </tr>
      );
    })

    return <tbody>{rows}</tbody>;
  }
}

export default Tbody
