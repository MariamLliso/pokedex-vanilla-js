import Component from "../Component/Component.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";
import { pokedex, myPokemon } from "../../constants/constants.js";
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
      try {
        new HeaderComponent(this.element, "header", "Pokédex", this.page);
      } catch (error) {
        throw new Error("Could not render AppComponent header Pokédex");
      }

      try {
        new PokemonListComponent(
          this.element,
          "ul",
          "pokemon-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled"
        );
      } catch (error) {
        throw new Error("Could not render AppComponent PokemonList Pokédex");
      }
    }

    if (this.page === myPokemon) {
      try {
        new HeaderComponent(this.element, "header", "My Pokédex", this.page);
      } catch (error) {
        throw new Error("Could not render AppComponent header My Pokédex");
      }
    }
  }
}

export default AppComponent;
