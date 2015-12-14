var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var Search = require('./components/search'),
    BenchStore = require('./stores/bench'),
    ApiUtil = require('./util/api_util'),
    App = require('./components/app'),
    BenchForm = require('./components/benchForm');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="benches/new" component={BenchForm}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
