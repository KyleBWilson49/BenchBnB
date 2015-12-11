var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice();
}

BenchStore._onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      BenchStore.emitChange();
      break;
  }
}

var resetBenches = function (benches) {
  _benches = benches;
}

window.BenchStore = BenchStore;

module.exports = BenchStore;
