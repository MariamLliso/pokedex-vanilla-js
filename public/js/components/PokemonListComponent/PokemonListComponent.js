import PokeAPIService from "../../services/PokeAPIService/PokeAPIService.js";
import Component from "../Component/Component.js";
import PokemonComponent from "../PokemonComponent/PokemonComponent.js";

class PokemonListComponent extends Component {
  constructor(parentElement, elementType, className) {
    super(parentElement, elementType, className);

    this.render();
  }

  async render() {
    const pokemonAPIService = new PokeAPIService();
    const { results } = await pokemonAPIService.getPokemonsPaginated(0);
    const pokemonLightList = Promise.all(
      results.map(async (pokemon) => {
        const pokemonData = await pokemonAPIService.getPokemonByName(
          pokemon.name
        );
        const pokemonTypes = pokemonData.types.map(({ type }) => type.name);
        const pokemonLight = {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.other.home.front_default,
          types: pokemonTypes,
        };
        return pokemonLight;
      })
    );

    (await pokemonLightList).forEach((pokemon) => {
      try {
        new PokemonComponent(this.element, "li", "col", pokemon);
      } catch (error) {
        throw new Error("Could not render AppComponent header Pokédex");
      }
    });
  }
}

export default PokemonListComponent;
