const Store = require("flux/utils").Store;
const Dispatcher = require("./../dispatcher/dispatcher");
const PokemonConstants = require('./../constants/pokemon_constants');

const PokemonStore = new Store(Dispatcher);

let _pokemons = {};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach((pokemon) => {
    _pokemons[pokemon.id] = pokemon;
  });
  this.__emitChange();
};

PokemonStore.resetSinglePokemon = function(pokemon) {
  // console.log(pokemon);
  // console.log(_pokemons[this.find(pokemon.id)]);
  _pokemons[this.find(pokemon.id)] = pokemon;
  // console.log(_pokemons[this.find(pokemon.id)]);
  this.__emitChange();
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
    this.resetPokemons(payload.pokemons);
    break;

    case PokemonConstants.SINGLE_RECEIVED:
    this.resetSinglePokemon(payload.pokemon);
    break;
  }
};

PokemonStore.all = function(){
  let keys = Object.keys(_pokemons);
  let result = [];
  keys.forEach((key)=>{
    return result.push(_pokemons[key]);
  });
  return result;
};

PokemonStore.find = function(id){
  let keys = Object.keys(_pokemons);

  for (let i = 0; i < keys.length; i++){
    if (keys[i] === id.toString()) {
      return _pokemons[id];
    }
  }
  return undefined;
};

module.exports = PokemonStore;
