const Dispatcher = require('./../dispatcher/dispatcher');
const PokemonConstants = require('./../constants/pokemon_constants');
const APIUtil = require('./../util/api_util');

const PokemonActions = {
  receiveAllPokemons: function(pokemons) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  fetchAllPokemons: function() {
    APIUtil.fetchAllPokemons(this.receiveAllPokemons);
  },

  fetchPokemon: function(id){
    APIUtil.fetchPokemon(id, this.receiveSinglePokemon);
  },

  receiveSinglePokemon: function(pokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.SINGLE_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = PokemonActions;
