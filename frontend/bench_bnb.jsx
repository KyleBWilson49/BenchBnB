var React = require('react'),
    ReactDOM = require('react-dom'),
    Search = require('./components/search'),
    BenchStore = require('./stores/bench'),
    ApiUtil = require('./util/api_util');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    document.getElementById('root')
  );
});
