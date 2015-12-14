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
  }
};

module.exports = ApiActions;
