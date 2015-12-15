var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var _marker = {};
var MarkerStore = new Store(AppDispatcher);

MarkerStore.selected = function () {
  return _marker;
};

MarkerStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.NEW_SELECTED_MARKER:
      change_selected(payload.marker);
      break;
  }
};

var change_selected = function (marker) {
  _marker = marker;
  MarkerStore.__emitChange();
};

module.exports = MarkerStore;
