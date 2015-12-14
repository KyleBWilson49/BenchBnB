var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice();
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      break;
    case BenchConstants.BENCH_CREATED:
      addBench(payload.bench);
      break;
  }
};

var addBench = function (bench) {
  _benches.push(bench);
  BenchStore.__emitChange();
};

var resetBenches = function (benches) {
  _benches = benches;
  BenchStore.__emitChange();
};

module.exports = BenchStore;
