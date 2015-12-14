var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    History = require('react-router').History;

module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    description: '',
    lat: '',
    lng: '',
    seating: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createBench: function (event) {
    event.preventDefault();
    var bench = {};
    Object.keys(this.state).forEach(function (key) {
      bench[key] = this.state[key];
    }.bind(this));
// ApiUtil
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
