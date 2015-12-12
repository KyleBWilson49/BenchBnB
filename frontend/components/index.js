var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function () {
    return {
      benches: BenchStore.all()
    };
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.benchListener.remove();
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  mouseOverListItem: function (e) {
    debugger
  },

  render: function () {
    var benches = this.state.benches.map(function (bench, idx) {
      return (
        <li key={idx} >{bench.description}</li>
      );
    });
    return (
      <ul className="bench-list" onMouseOver={this.mouseOverListItem}>
        {benches}
      </ul>
    );
  }
});

module.exports = Index;
