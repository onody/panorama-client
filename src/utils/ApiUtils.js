import 'whatwg-fetch'
import assign from 'object-assign'

let config = '';

switch (process.env.NODE_ENV) {
  case 'production':
    config = {
      api: 'http://128.199.190.185:3000'
    }
    break;
  case 'development':
    config = {
      api: 'http://localhost:3000'
    }
    break;
  default:
    config = {
      api: 'http://localhost:3000'
    }
}

let ApiFetcher = (method, uri, body) => {
  let option = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if(body != null){
    assign(option, {body: body})
  }

  return fetch(config.api + uri, option)
    .then(function(response){
      return response.json();
    });
}

let ApiUtils = {
  fetchTrades: function() {
    return ApiFetcher('GET', '/trades.json', null);
  },
  fetchVendorCharts: function(vendor_id) {
    return ApiFetcher('GET', '/vendors/' + vendor_id + '/chart.json', null);
  },
  fetchAllCharts: function() {
    return ApiFetcher('GET', '/trades/chart.json', null);
  }
}

export default ApiUtils
