import Component from "../Component/Component.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";
import { pokedex, myPokemon, detail } from "../../constants/constants.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";

class AppComponent extends Component {
  page;

  constructor(parentElement, elementType, className, page) {
    super(parentElement, elementType, className);
    this.page = page;

    this.render();
  }

  render() {
    if (this.page === pokedex) {
      this.renderPokedex();
    }

    if (this.page === myPokemon) {
      this.renderMyPokemons();
    }

    if (this.page === detail) {
      this.renderPokemonDetail();
    }
  }

  renderPokedex() {
    try {
      new HeaderComponent(this.element, "header", "Pokédex", this.page);
    } catch (error) {
      throw new Error("Could not render AppComponent header Pokédex");
    }

    try {
      new PokemonListComponent(
        this.element,
        "ul",
        "pokemon-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled",
        this.page
      );
    } catch (error) {
      throw new Error("Could not render AppComponent PokemonList Pokédex");
    }
  }

  renderMyPokemons() {
    try {
      new HeaderComponent(this.element, "header", "My Poképons", this.page);
    } catch (error) {
      throw new Error("Could not render AppComponent header My Pokémon");
    }

    try {
      new PokemonListComponent(
        this.element,
        "ul",
        "pokemon-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled",
        this.page
      );
    } catch (error) {
      throw new Error("Could not render AppComponent PokemonList My Pokémon");
    }
  }

  renderPokemonDetail() {
    try {
      new HeaderComponent(this.element, "header", "Pokémon info", this.page);
    } catch (error) {
      throw new Error("Could not render AppComponent header detail");
    }
  }
}

export default AppComponent;
