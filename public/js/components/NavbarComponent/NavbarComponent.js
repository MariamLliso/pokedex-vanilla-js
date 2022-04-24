import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component/Component.js";
import { pokedex, myPokemon, detail } from "../../constants/constants.js";

class NavbarComponent extends Component {
  page;

  constructor(parentElement, className, page) {
    super(parentElement, "nav", className);
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
      new ButtonComponent(this.element, "My Pokémons", "navbar__button", () => {
        window.open("html/my-pokemons.html", "_self");
      });
    } catch (error) {
      throw new Error("Could not render HeaderComponent title");
    }
  }

  renderMyPokemons() {
    try {
      new ButtonComponent(this.element, "Pokédex", "navbar__button", () => {
        window.open("/index.html", "_self");
      });
    } catch (error) {
      throw new Error("Could not render HeaderComponent title");
    }
  }

  renderPokemonDetail() {
    try {
      new ButtonComponent(
        this.element,
        "Pokédex",
        "navbar__button navbar__button--margin",
        () => {
          window.open("../index.html", "_self");
        }
      );
    } catch (error) {
      throw new Error("Could not render HeaderComponent title");
    }

    try {
      new ButtonComponent(this.element, "My Pokémons", "navbar__button", () => {
        window.open("my-pokemons.html", "_self");
      });
    } catch (error) {
      throw new Error("Could not render HeaderComponent title");
    }
  }
}

export default NavbarComponent;
