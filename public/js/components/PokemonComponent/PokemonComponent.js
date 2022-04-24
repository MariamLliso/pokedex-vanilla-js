import BadgeComponent from "../BadgeComponent/BadgeComponent.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component/Component.js";
import MyPokemonsService from "../../services/MyPokemonsService/MyPokemonsService.js";

class PokemonComponent extends Component {
  pokemon;
  action;

  constructor(parentElement, elementType, className, pokemon, action) {
    super(parentElement, elementType, className);
    this.pokemon = pokemon;
    this.action = action;

    this.render();
    this.addListeners();
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
          </div>
        </div>
    `;

    this.renderPokemonType();
    this.renderCatchButton();
  }

  renderPokemonType() {
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

  async renderCatchButton() {
    try {
      new ButtonComponent(
        this.element,
        "Catch this Pokémom",
        "pokemon__button",
        async () => {
          const myPokemonService = new MyPokemonsService();
          await myPokemonService.postPokemons(this.pokemon.id);
        }
      );
    } catch (error) {
      throw new Error("Could not render catch pokemon button");
    }
  }

  addListeners() {
    const pokemonCard = this.element.querySelector(".pokemon");
    pokemonCard.addEventListener("click", this.action);
  }
}

export default PokemonComponent;
