var React = require('react'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    description: '',
    lat: '',
    lng: '',
    seating: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  componentDidMount: function () {
    var lat = this.props.location.query.lat;
    var lng = this.props.location.query.lng;
    this.setState({ lat: lat, lng: lng });
  },

  createBench: function (event) {
    event.preventDefault();

    var bench = {};

    Object.keys(this.state).forEach(function (key) {
      bench[key] = this.state[key];
    }.bind(this));

    ApiUtil.createBench(bench, function () {
      this.props.history.push('/');
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <form className='new-bench' onSubmit={this.createBench}>
        <h4>Create New Bench</h4>
        <div>
          <label htmlFor='bench-desc'>Description</label>
          <input type='text'
                 id='bench-desc'
                 valueLink={this.linkState('description')}
          />
        </div>
        <div>
          <label htmlFor='bench-lat'>Latitude</label>
          <input type='text'
                 id='bench-lat'
                 valueLink={this.linkState('lat')}
          />
        </div>
        <div>
          <label htmlFor='bench-lng'>Longitude</label>
          <input type='text'
                 id='bench-lng'
                 valueLink={this.linkState('lng')}
          />
        </div>
        <div>
          <label htmlFor='bench-seating'>Seats</label>
          <input type='text'
                 id='bench-seating'
                 valueLink={this.linkState('seating')}
          />
        </div>

        <button>Create Bench</button>
      </form>
    );
  }
});
