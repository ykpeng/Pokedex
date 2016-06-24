const React = require('react');
const hashHistory = require('react-router').hashHistory;

const PokemonIndexItem = React.createClass({
  showDetail(){
    hashHistory.push('/pokemon/'+(this.props.pokemon.id).toString());
  },
  
  render() {
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        <p>
          <span>Name: {this.props.pokemon.name}</span>
          <span>Poke Type: {this.props.pokemon.poke_type}</span>
        </p>
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
