import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component/Component.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";

class PaginationComponent extends Component {
  totalPokemon;
  numberPokemonsAtPage;
  page;
  offset;

  constructor(parentElement, totalPokemon, numberPokemonsAtPage, page, offset) {
    super(parentElement, "nav", "pagination-navbar");
    this.totalPokemon = totalPokemon;
    this.numberPokemonsAtPage = numberPokemonsAtPage;
    this.page = page;
    this.offset = offset;

    this.render();
    this.renderPrevious();
    this.renderNext();
  }

  render() {
    this.element.innerHTML = `
      <ul class="pagination justify-content-around align-items-center">
        <li class="page-item previus">
        </li>
        <li class="page-item">
          <span class="navbar__button navbar__button--pagination navbar__button--text justify-content-around align-items-center"
            >${this.numberPokemonsAtPage} of ${this.totalPokemon}
            <img src="../images/pokeball.png" alt="pokeball at pagination" />
          </span>
        </li>
        <li class="page-item next">
        </li>
      </ul>
    `;
  }

  reloadPreviousNextButtons() {
    this.renderPrevious();
    this.renderNext();
  }

  renderPrevious() {
    const previus = this.element.querySelector(".previus");
    try {
      const buttonPrevius = new ButtonComponent(
        previus,
        "",
        "navbar__button navbar__button--pagination",
        () => {
          const pokemonList = document.querySelector(".pokemon-list");
          pokemonList.remove();

          const list = document.querySelector(".list-container");

          try {
            new PokemonListComponent(
              list,
              "ul",
              "pokemon-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled",
              this.page,
              (this.offset -= 12)
            );
          } catch (error) {
            throw new Error(
              "Could not render AppComponent PokemonList Pokédex"
            );
          }

          this.render();
          this.reloadPreviousNextButtons();
        }
      );
      buttonPrevius.element.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
    } catch (error) {
      throw new Error("Could not render AppComponent header Pokédex");
    }
  }

  renderNext() {
    const next = this.element.querySelector(".next");
    try {
      const buttonPrevius = new ButtonComponent(
        next,
        "",
        "navbar__button navbar__button--pagination",
        () => {
          const pokemonList = document.querySelector(".pokemon-list");
          pokemonList.remove();

          const list = document.querySelector(".list-container");

          try {
            new PokemonListComponent(
              list,
              "ul",
              "pokemon-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled",
              this.page,
              (this.offset += 12)
            );
          } catch (error) {
            throw new Error(
              "Could not render AppComponent PokemonList Pokédex"
            );
          }

          this.render();
          this.reloadPreviousNextButtons();
        }
      );
      buttonPrevius.element.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
    } catch (error) {
      throw new Error("Could not render AppComponent header Pokédex");
    }
  }
}

export default PaginationComponent;
