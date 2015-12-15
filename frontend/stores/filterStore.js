var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var _filters = {bounds: "", min: 0, max: 1000};
var FilterStore = new Store(AppDispatcher);

FilterStore.all = function () {
  return _filters;
};

FilterStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.FILTERS_RECEIVED:
      updateFilters(payload.filters);
      break;
  }
};

var updateFilters = function (filters) {
  Object.keys(filters).forEach(function (key) {
    _filters[key] = filters[key];
  });
  FilterStore.__emitChange();
};

module.exports = FilterStore;
