var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      name: '',
      review: ''
    };
  },

  createReview: function () {

  },

  render: function () {
    return (
      <form className="review-form" onSubmit={this.createReview}>
        <h3>New Review</h3>
        <div>
          <label htmlFor='Name'>Name</label>
          <input type='text'
                 id='Name'
                 valueLink={this.linkState('name')}
          />
        </div>
        <div>
          <label htmlFor='bench-review'>Description</label>
          <input type='text'
                 id='bench-review'
                 valueLink={this.linkState('review')}
          />
        </div>

        <button>Create Bench</button>
      </form>
    );
  }
});

module.exports = ReviewForm;
