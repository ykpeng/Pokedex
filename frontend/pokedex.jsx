const React = require('react');
const ReactDOM = require('react-dom');
const ApiUtil = require('./util/api_util');
const PokemonActions = require('./actions/pokemon_actions');
const PokemonStore = require('./stores/pokemon');
// const PokemonConstants = require('./constants/pokemon_constants');
const PokemonsIndex = require('./components/pokemons/pokemons_index');
const PokemonDetail = require('./components/pokemons/pokemon_detail');

const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;

const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = React.createClass({
  render(){
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail} />
  </Route>
);


document.addEventListener("DOMContentLoaded", ()=> {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("root"));
});
