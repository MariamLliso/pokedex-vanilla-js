import MyPokemonService from "../../services/MyPokemonsService/MyPokemonsService.js";
import PokeAPIService from "../../services/PokeAPIService/PokeAPIService.js";
import Component from "../Component/Component.js";
import PokemonComponent from "../PokemonComponent/PokemonComponent.js";
import { pokedex, myPokemon } from "../../constants/constants.js";

class PokemonListComponent extends Component {
  page;
  offset;

  constructor(parentElement, elementType, className, page, offset = 0) {
    super(parentElement, elementType, className);
    this.page = page;
    this.offset = offset;

    this.render();
  }

  async render() {
    if (this.page === pokedex) {
      this.renderPokedex();
    }

    if (this.page === myPokemon) {
      this.renderMyPokemons();
    }
  }

  async renderPokedex() {
    const pokemonAPIService = new PokeAPIService();
    const pokemonLightList = await pokemonAPIService.getPokemonsLight(
      this.offset
    );

    pokemonLightList.forEach((pokemon) => {
      try {
        new PokemonComponent(this.element, "li", "col", pokemon, () => {
          window.open("html/detail.html", "_self");
        });
      } catch (error) {
        throw new Error("Could not render AppComponent header Pokédex");
      }
    });
  }

  async renderMyPokemons() {
    const myPokemonService = new MyPokemonService();
    const pokemonLightList = await myPokemonService.getPokemonsLight();
    pokemonLightList.forEach((pokemon) => {
      try {
        new PokemonComponent(this.element, "li", "col", pokemon, () => {
          window.open("detail.html", "_self");
        });
      } catch (error) {
        throw new Error("Could not render AppComponent header Pokédex");
      }
    });
  }
}

export default PokemonListComponent;
