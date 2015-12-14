var AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

FilterActions = {
  receiveFilters: function (filters) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.FILTERS_RECEIVED,
      filters: filters
    });
  }
};

module.exports = FilterActions;
