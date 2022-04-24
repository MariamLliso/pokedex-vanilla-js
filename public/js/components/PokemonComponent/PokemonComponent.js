import BadgeComponent from "../BadgeComponent/BardgeComponent.js";
import Component from "../Component/Component.js";

class PokemonComponent extends Component {
  pokemon;

  constructor(parentElement, elementType, className, pokemon) {
    super(parentElement, elementType, className);
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <div class="pokemon">
          <div class="pokemon__body">
            <ul class="pokemon__stats list-unstyled row">
              <li class="pokemon__position col">
                <span class="pokemon__badge number">Nº ${this.pokemon.id}</span>
              </li>
              <li class="pokemon__type col">
              </li>
            </ul>
            <img
              src="${this.pokemon.image}"
              class="pokemon__image"
              alt="${this.pokemon.name}"
            />
            <h2 class="pokemon__title">${this.pokemon.name}</h2>
            <button type="button" class="pokemon__button">
              Catch this Pokémom
            </button>
          </div>
        </div>
    `;

    const type = this.element.querySelector(".pokemon__type");
    if (this.pokemon.types.length === 1) {
      try {
        new BadgeComponent(
          type,
          "span",
          `pokemon__badge ${this.pokemon.types[0]}`,
          `${this.pokemon.types[0]}`
        );
      } catch (error) {
        throw new Error("Couldn't render type badge");
      }
    }

    if (this.pokemon.types.length === 2) {
      try {
        new BadgeComponent(
          type,
          "span",
          `pokemon__badge pokemon__badge--margin-right ${this.pokemon.types[0]}`,
          `${this.pokemon.types[0]}`
        );
        new BadgeComponent(
          type,
          "span",
          `pokemon__badge ${this.pokemon.types[1]}`,
          `${this.pokemon.types[1]}`
        );
      } catch (error) {
        throw new Error("Couldn't render type badge");
      }
    }
  }
}

export default PokemonComponent;
