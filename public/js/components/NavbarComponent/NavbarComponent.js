import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component/Component.js";
import { pokedex, myPokemon } from "../../constants/constants.js";

class NavbarComponent extends Component {
  page;

  constructor(parentElement, className, page) {
    super(parentElement, "nav", className);
    this.page = page;

    this.render();
  }

  render() {
    if (this.page === pokedex) {
      try {
        new ButtonComponent(this.element, "My Pokémons", () => {
          window.open("/my-pokemons.html", "_self");
        });
      } catch (error) {
        throw new Error("Could not render HeaderComponent title");
      }
    }

    if (this.page === myPokemon) {
      try {
        new ButtonComponent(this.element, "Pokédex", () => {
          window.open("/index.html", "_self");
        });
      } catch (error) {
        throw new Error("Could not render HeaderComponent title");
      }
    }
  }
}

export default NavbarComponent;
