import Component from "../Component/Component.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";
import PaginationComponent from "../PaginationComponent/PaginationComponent.js";
import { pokedex, myPokemon, detail } from "../../constants/constants.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";
import PokeAPIService from "../../services/PokeAPIService/PokeAPIService.js";
import PokemonDetailComponent from "../PokemonDetailComponent/PokemonDetailComponent.js";

class AppComponent extends Component {
  page;
  offset;
  id;

  constructor(parentElement, elementType, className, page, offset, id) {
    super(parentElement, elementType, className);
    this.offset = offset;
    this.page = page;
    this.id = id;

    this.render();
  }

  render() {
    this.createListContainer();

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

  createListContainer() {
    const list = document.createElement("div");
    list.className = "list-container";
    this.element.append(list);
  }

  async renderPokedex() {
    const pokemonAPIService = new PokeAPIService();

    try {
      new HeaderComponent(
        this.element,
        "header fixed-top",
        "Pokédex",
        this.page
      );
    } catch (error) {
      throw new Error("Could not render AppComponent header Pokédex");
    }

    const list = document.querySelector(".list-container");
    try {
      new PokemonListComponent(
        list,
        "ul",
        "pokemon-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled",
        this.page
      );
    } catch (error) {
      throw new Error("Could not render AppComponent PokemonList Pokédex");
    }

    const totalPokemon = await pokemonAPIService.count(this.offset);
    const numberPokemonsAtPage = this.offset + 12;

    try {
      new PaginationComponent(
        this.element,
        totalPokemon,
        numberPokemonsAtPage,
        this.page,
        this.offset
      );
    } catch (error) {
      throw new Error("Could not render AppComponent header Pokédex");
    }
  }

  renderMyPokemons() {
    try {
      new HeaderComponent(
        this.element,
        "header fixed-top",
        "My Pokémons",
        this.page
      );
    } catch (error) {
      throw new Error("Could not render AppComponent header My Pokémon");
    }

    try {
      new PokemonListComponent(
        this.element,
        "ul",
        "pokemon-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled",
        this.page
      );
    } catch (error) {
      throw new Error("Could not render AppComponent PokemonList My Pokémon");
    }
  }

  async renderPokemonDetail() {
    try {
      new HeaderComponent(
        this.element,
        "header fixed-top",
        "Pokémon info",
        this.page
      );
    } catch (error) {
      throw new Error("Could not render AppComponent header detail");
    }

    const pokemonAPIService = new PokeAPIService();
    const pokemon = await pokemonAPIService.getPokemonById(this.id);
    const list = document.querySelector(".list-container");

    try {
      new PokemonDetailComponent(list, "section", "", pokemon);
    } catch (error) {
      throw new Error("Could not render PokemonDetailComponent");
    }
  }
}

export default AppComponent;
