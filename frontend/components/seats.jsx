var React = require('react'),
    FilterActions = require('../actions/filter_actions'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var Seats = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { min: 0, max: 1000 };
  },

  updateFilters: function (event) {
    event.preventDefault();

    var range = {
      min: this.state.min,
      max: this.state.max
    };

    FilterActions.receiveFilters(range);
  },

  render: function () {
    return (
      <form className='seats-filter' onSubmit={this.updateFilters}>
        <div>
          <label htmlFor='min-seats'>Min Seats</label>
          <input type='text'
                 id='min-seats'
                 valueLink={this.linkState('min')}
          />
        </div>
        <div>
          <label htmlFor='max-seats'>Min Seats</label>
          <input type='text'
                 id='max-seats'
                 valueLink={this.linkState('max')}
          />
        </div>

        <button>Update Filter</button>
      </form>
    );
  }
});

module.exports = Seats;
