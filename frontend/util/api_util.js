module.exports = {
  fetchAllPokemons: function(cb) {
    $.ajax({
      url: 'api/pokemon',
      dataType: 'json',
      success: function(pokemons) {
        cb(pokemons);
      }
    });
  },

  fetchPokemon: function(id, cb){
    $.ajax({
      url: `/api/pokemon/${id}`,
      dataType: 'json',
      success: function(pokemon) {
        cb(pokemon);
      }
    });
  }
};
