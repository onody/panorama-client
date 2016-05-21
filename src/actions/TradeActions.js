import AppDispatcher from '../dispatcher/AppDispatcher'
import TradeConstants from '../constants/TradeConstants'
import ApiUtils from '../utils/ApiUtils'

let TradeActions = {

  pull: () => {
    let fetchedTrades = ApiUtils.fetchTrades();

    fetchedTrades.then(function(json){
      AppDispatcher.dispatch({
        actionType: TradeConstants.TRADE_UPDATE_ALL,
        data: json
      })
    });
  },

  filter: (key, val) => {
    AppDispatcher.dispatch({
      actionType: TradeConstants.TRADE_FILTER,
      key: key,
      val: val
    });
  },

  unfilter: (key) => {
    AppDispatcher.dispatch({
      actionType: TradeConstants.TRADE_UNFILTER,
      key: key
    });
  }
}

export default TradeActions
