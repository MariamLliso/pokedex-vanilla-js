import PokeAPIService from "../PokeAPIService/PokeAPIService.js";

class MyPokemonService {
  endpoint;

  constructor() {
    this.endpoint = "https://mariam-lliso-poke-api.herokuapp.com/pokemon";
  }

  async getPokemons() {
    const response = await fetch(`${this.endpoint}`);
    const data = await response.json();
    return data;
  }

  async getPokemonsLight() {
    const myPokemons = await this.getPokemons();
    const pokemonLightList = Promise.all(
      myPokemons.map(async (pokemon) => {
        const pokemonTypes = pokemon.types.map(({ type }) => type.name);
        const pokemonLight = {
          id: pokemon.id,
          name: pokemon.forms[0].name,
          image: pokemon.sprites.other.home.front_default,
          types: pokemonTypes,
        };
        return pokemonLight;
      })
    );

    return pokemonLightList;
  }

  async postPokemons(id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const pokeAPIService = new PokeAPIService();
    const pokemon = await pokeAPIService.getPokemonById(id);
    const pokemonJSON = JSON.stringify(pokemon);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: pokemonJSON,
      redirect: "follow",
    };

    await fetch(`${this.endpoint}`, requestOptions);
  }
}

export default MyPokemonService;
