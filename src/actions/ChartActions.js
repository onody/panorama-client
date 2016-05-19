import AppDispatcher from '../dispatcher/AppDispatcher'
import ChartConstants from '../constants/ChartConstants'
import ApiUtils from '../utils/ApiUtils'

let ChartActions = {

  pull: (vendor_id) => {
    let fetchedCharts = ApiUtils.fetchCharts(vendor_id);

    fetchedCharts.then(function(json){
      AppDispatcher.dispatch({
        actionType: ChartConstants.CHART_UPDATE_ALL,
        data: json
      })
    });
  }
}

export default ChartActions
