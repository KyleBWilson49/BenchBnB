var React = require('react'),
    Map = require('./map'),
    Index = require('./index');

var Search = React.createClass({
  clickMapHandler: function (lat, lng) {
    var state = null;
    var url = "/benches/new";
    var query = {lat: lat, lng: lng};
    this.props.history.pushState(state, url, query);
  },

  render: function () {
    return (
      <div>
        <Map click={this.clickMapHandler}/>
        <Index />
      </div>
    );
  }
});

module.exports = Search;
