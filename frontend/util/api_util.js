var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: "api/benches",
      data: bounds,
      success: function (benches) {
        ApiActions.receiveAll(benches);
      }
    });
  },

  createBench: function (bench, callback) {
    $.ajax({
      url: "api/benches",
      method: "POST",
      data: { bench: bench },
      success: function (bench) {
        ApiActions.createdBench(bench);
        callback();
      }
    });
  }
};

module.exports = ApiUtil;
