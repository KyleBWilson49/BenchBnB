var AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  createdBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_CREATED,
      bench: bench
    });
  },

  selectMarker: function (marker) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_SELECTED_MARKER,
      marker: marker
    });
  }
};

module.exports = ApiActions;
