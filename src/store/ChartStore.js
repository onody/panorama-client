import assign from 'object-assign'
import sift   from 'sift'
import { EventEmitter as EventEmitter } from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'
import ChartConstants from '../constants/ChartConstants'

const CHANGE_EVENT = 'change';
let _charts = [];

let ChartStore = assign({}, EventEmitter.prototype, {

  selectAll: () => {
    return _charts;
  },

  updateAll: (data) => {
    _charts = data;
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

    case ChartConstants.CHART_UPDATE_ALL:
      ChartStore.updateAll(action.data);
      ChartStore.emitChange()
      break;

    default:
      null
  }
})

export default ChartStore
