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
}

export default PokeAPIService;
