var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench'),
    FilterStore = require('../stores/filterStore'),
    FilterActions = require('../actions/filter_actions'),
    ApiUtil = require('../util/api_util');


var Map = React.createClass({
  getInitialState: function () {
    return { markers: {} };
  },

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.benchListener = BenchStore.addListener(this._placeMarkers);
    this.mapListener = google.maps.event.addListener(this.map, 'idle', this._updateFilters);
    this.clickListener = google.maps.event.addListener(this.map, 'click', this.handleClick);
  },

  componentWillUnmount: function () {
    this.benchListener.remove();
    this.mapListener.remove();
  },

  _updateFilters: function () {
    var bounds = this.map.getBounds();
    var NECorner = bounds.getNorthEast();
    var SWCorner = bounds.getSouthWest();

    FilterActions.receiveFilters({
      bounds: {
        NECorner: { lat: NECorner.lat(), lng: NECorner.lng()},
        SWCorner: { lat: SWCorner.lat(), lng: SWCorner.lng()}
      }
    });
  },

  _placeMarkers: function () {
    var benches = BenchStore.all();
    var markers = [];

    this._removeOldBenches(benches);

    benches.forEach(function (bench) {
      var latLng = { lat: bench.lat, lng: bench.lng };

      var marker = new google.maps.Marker({
        position: latLng,
        title: bench.description
      });

      marker.setMap(this.map);

      markers.push(marker);
    }.bind(this));

    this.setState({ markers: markers });
  },

  _removeOldBenches: function (newBenches) {
    var oldBenches = this.state.markers;

    if (Object.keys(oldBenches).length > 0) {
      var newBenchesTitles = newBenches.map(function (bench) {
        return bench.title;
      });

      oldBenches.forEach(function (oldBench) {
        if (newBenchesTitles.indexOf(oldBench.title) === -1) {
          oldBench.setMap(null);
        }
      });
    }
  },

  handleClick: function (e) {
    this.props.click(e.latLng.lat(), e.latLng.lng());
  },

  render: function () {
    return (
      <div className="map" ref="map">

      </div>
    );
  }
});

module.exports = Map;
