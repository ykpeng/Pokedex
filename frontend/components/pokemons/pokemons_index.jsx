const React = require('react');
const PokemonStore = require("./../../stores/pokemon");
const PokemonActions = require("./../../actions/pokemon_actions");
const PokemonIndexItem = require('./pokemon_index_item');

const PokemonsIndex = React.createClass({
  getInitialState(){
    return {pokemons: PokemonStore.all(), token: null};
  },

  componentDidMount(){
    let token = PokemonStore.addListener(this._onChange);
    this.setState({token: token});
    PokemonActions.fetchAllPokemons();
  },

  _onChange(){
    this.setState({pokemons: PokemonStore.all()});
  },

  componentWillUnmount(){
    this.state.token.remove();
    this.setState({token: null});
  },

  render(){
    return(
      <ul>
        {
          this.state.pokemons.map((pokemon)=>{
            return (<PokemonIndexItem pokemon={pokemon} key={pokemon.id} />);
          })
        }
      </ul>
    );
  }
});

module.exports = PokemonsIndex;
