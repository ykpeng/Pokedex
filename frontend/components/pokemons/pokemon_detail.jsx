const React = require('react');
const PokemonStore = require('./../../stores/pokemon');
const PokemonActions = require('./../../actions/pokemon_actions');
const hashHistory = require('react-router').hashHistory;
const ToysIndex = require('./../toys/toys_index');

const PokemonDetail = React.createClass({
  getStateFromStore(){
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  getInitialState() {
    return {pokemon: this.getStateFromStore()};
  },

  componentWillReceiveProps(props){
    PokemonActions.fetchPokemon(parseInt(props.params.pokemonId));
    // this.setState({pokemon: PokemonStore.find(parseInt(props.params.pokemonId))});
  },

  _handleChange(){
    this.setState({pokemon: this.getStateFromStore()});
  },

  componentDidMount() {
    this.token = PokemonStore.addListener(this._handleChange);
  },

  render() {
    let content = <div></div>;
    if (this.state.pokemon) {
      content = (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={this.state.pokemon.image_url}
                alt={this.state.pokemon.name}/> <br/>
              name: {this.state.pokemon.name}<br/>
              attack: {this.state.pokemon.attack}<br/>
              defense: {this.state.pokemon.defense}<br/>
              poke_type: {this.state.pokemon.poke_type}<br/>
              moves: {this.state.pokemon.moves}<br/>
            </div>
          </div>
          <ToysIndex toys={this.state.pokemon.toys}/>
        </div>
      );
    }
    return (
      content
    );
  },




});

module.exports = PokemonDetail;
