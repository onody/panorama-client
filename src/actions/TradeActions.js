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

  filter: (param) => {
    AppDispatcher.dispatch({
      actionType: TradeConstants.TRADE_FILTER,
      data: param
    });
  }
}

export default TradeActions
