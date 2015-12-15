var React = require('react'),
    ReviewForm = require('./reviewForm');

var Review = React.createClass({
  render: function () {
    return (
      <div>
        <h5>Reviews</h5>

        <ReviewForm />
      </div>
    );
  }
});

module.exports = Review;
