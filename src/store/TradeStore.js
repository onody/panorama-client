import assign from 'object-assign'
import sift   from 'sift'
import { EventEmitter as EventEmitter } from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'
import TradeConstants from '../constants/TradeConstants'

const CHANGE_EVENT = 'change';
let _trades = [];
let _filter = null;

let TradeStore = assign({}, EventEmitter.prototype, {

  selectAll: () => {
    if(_filter != null){
      let query = sift(_filter);
      return _trades.filter(query);
    }else{
      return _trades;
    }
  },

  updateAll: (data) => {
    _trades = data;
  },

  filter: (data) => {
    _filter = data;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

})

AppDispatcher.register((action) => {
  switch (action.actionType) {

    case TradeConstants.TRADE_UPDATE_ALL:
      TradeStore.updateAll(action.data);
      TradeStore.emitChange()
      break;

    case TradeConstants.TRADE_FILTER:
      TradeStore.filter(action.data);
      TradeStore.emitChange()
      break;

    default:
      null
  }
})

export default TradeStore
