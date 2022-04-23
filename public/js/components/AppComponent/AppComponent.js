import Component from "../Component/Component.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";
import { pokedex, myPokemon } from "../../constants/constants.js";

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
        throw new Error("Could not render AppComponent header");
      }
    }

    if (this.page === myPokemon) {
      try {
        new HeaderComponent(this.element, "header", "My Pokédex", this.page);
      } catch (error) {
        throw new Error("Could not render AppComponent header");
      }
    }
  }
}

export default AppComponent;
