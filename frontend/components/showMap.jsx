var React = require('react'),
    ReactDOM = require('react-dom');

var ShowMap = React.createClass({
  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: this.props.bench.lat, lng: this.props.bench.lng },
      zoom: 15,
      draggable: false,
      panControl: false
    };
    this.map = new google.maps.Map(map, mapOptions);

    this._placeMarker();
  },

  _placeMarker: function () {
    var latLng = {
      lat: this.props.bench.lat,
      lng: this.props.bench.lng
    };

    var marker = new google.maps.Marker({
      position: latLng,
    });

    marker.setMap(this.map);
  },

  render: function () {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
});

module.exports = ShowMap;
