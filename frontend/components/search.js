var React = require('react'),
    Map = require('./map'),
    FilterStore = require('../stores/filterStore'),
    ApiUtil = require('../util/api_util'),
    Index = require('./index'),
    Seats = require('./seats');

var Search = React.createClass({
  getInitialState: function () {
    return FilterStore.all();
  },

  componentDidMount: function () {
    this.filterListener = FilterStore.addListener(this._updateFilters);
  },

  componentWillUnmount: function () {
    this.filterListener.remove();
  },

  clickMapHandler: function (lat, lng) {
    var state = null;
    var url = "/benches/new";
    var query = {lat: lat, lng: lng};
    this.props.history.pushState(state, url, query);
  },

  _updateFilters: function () {
    this.setState(FilterStore.all(), this._updateBenches());
  },

  _updateBenches: function () {
    ApiUtil.fetchBenches(FilterStore.all());
  },

  render: function () {
    return (
      <div>
        <Seats />
        <Map click={this.clickMapHandler} filters={this.state}/>
        <Index />
      </div>
    );
  }
});

module.exports = Search;
