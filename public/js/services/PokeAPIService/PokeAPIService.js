class PokeAPIService {
  endpoint;

  constructor() {
    this.endpoint = "https://pokeapi.co/api/v2/pokemon/";
  }

  async getPokemonsPaginated(offset, limit = 12) {
    const response = await fetch(
      `${this.endpoint}?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  }

  async getPokemonByName(name) {
    const response = await fetch(`${this.endpoint}${name}`);
    const data = await response.json();
    return data;
  }

  async getPokemonById(id) {
    const response = await fetch(`${this.endpoint}${id}`);
    const data = await response.json();
    return data;
  }

  async getPokemonsLight() {
    const { results } = await this.getPokemonsPaginated(0);
    const pokemonLightList = Promise.all(
      results.map(async (pokemon) => {
        const pokemonData = await this.getPokemonByName(pokemon.name);
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

    return pokemonLightList;
  }
}

export default PokeAPIService;
