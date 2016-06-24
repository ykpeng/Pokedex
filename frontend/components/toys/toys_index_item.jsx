const React = require('react');

const ToyIndexItem = React.createClass({
  render() {
    return <li key={this.props.toy.id} className="toy-list-item">
            {this.props.toy.name}{this.props.toy.happiness}{this.props.toy.price}
          </li>;
  }
});

module.exports = ToyIndexItem;
