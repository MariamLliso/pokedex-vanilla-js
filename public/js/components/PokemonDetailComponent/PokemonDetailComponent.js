import BadgeComponent from "../BadgeComponent/BadgeComponent.js";
import Component from "../Component/Component.js";

class PokemonDetailComponent extends Component {
  pokemon;

  constructor(parentElement, elementType, className, pokemon) {
    super(parentElement, elementType, className);
    this.pokemon = pokemon;

    this.render();
  }

  render() {
    this.element.innerHTML = `
      <div class="pokemon-detail">
        <div class="col-md-4">
          <img
                  src="${this.pokemon.sprites.other.home.front_default}"
                  class="pokemon-detail__image"
                  alt="${this.pokemon.name}"
                />
          </div>
          <div class="col-md-8">
          <div class="pokemon-detail__body">
            <ul class="pokemon-detail__stats list-unstyled row">
              <li class="pokemon-detail__position col">
                <span class="pokemon__badge number">Nº ${this.pokemon.id}</span>
              </li>
              <li class="pokemon-detail__type col">
              </li>
            </ul>
            <div class="row row-cols-2 justify-content-between">
            <div class="col"><h2 class="pokemon-detail__title">${this.pokemon.name}</h2></div>
            <div class="col">
                <div class="pokemon-detail__hw">
                      <div class="col">Height: ${this.pokemon.height}</div>
                      <div class="col">Weight: ${this.pokemon.weight}</div>
                </div>
            </div>
            <div class="row row-cols-1">
    <div class="col"><h4 class="pokemon-detail__subtitle">Abilitys</h4></div>
    <div class="col">
    <div class="row row-cols-4 pokemon-detail__abilitys">
            </div>
    </div>
  </div>
            
            
            
          </div>
          </div>
        </div>
    `;

    this.renderPokemonType();
    this.renderAbility();
  }

  renderAbility() {
    const abilityContainer = this.element.querySelector(
      ".pokemon-detail__abilitys"
    );
    const abilitys = this.pokemon.abilities.map(
      (ability) => ability.ability.name
    );

    abilitys.forEach((ability) => {
      const element = document.createElement("div");
      element.className = "col";
      element.innerText = ability;
      abilityContainer.append(element);
    });
  }

  renderPokemonType() {
    const type = this.element.querySelector(".pokemon-detail__type");
    if (this.pokemon.types.length === 1) {
      try {
        new BadgeComponent(
          type,
          "span",
          `pokemon__badge ${this.pokemon.types[0].type.name}`,
          `${this.pokemon.types[0].type.name}`
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
          `pokemon__badge pokemon__badge--margin-right ${this.pokemon.types[0].type.name}`,
          `${this.pokemon.types[0].type.name}`
        );
        new BadgeComponent(
          type,
          "span",
          `pokemon__badge ${this.pokemon.types[1].type.name}`,
          `${this.pokemon.types[1].type.name}`
        );
      } catch (error) {
        throw new Error("Couldn't render type badge");
      }
    }
  }
}

export default PokemonDetailComponent;
