var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util'),
    ShowMap = require('./showMap'),
    Review = require('./review');

var Show = React.createClass({
  getInitialState: function () {
    return { bench: BenchStore.find(parseInt(this.props.params.benchId)) };
  },

  render: function () {
    return (
        <div>
          <ShowMap bench={this.state.bench}/>
          {this.state.bench.description}
          <br/>
          {this.state.bench.seating}
          <br/>
          <Review />
        </div>
    );
  }
});

module.exports = Show;
