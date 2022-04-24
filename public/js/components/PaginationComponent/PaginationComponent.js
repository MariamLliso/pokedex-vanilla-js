import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component/Component.js";

class PaginationComponent extends Component {
  totalPokemon;
  numberPokemonsAtPage;
  actionPrevious;
  actionNext;

  constructor(
    parentElement,
    totalPokemon,
    numberPokemonsAtPage,
    actionPrevious,
    actionNext
  ) {
    super(parentElement, "nav", "pagination-navbar");
    this.totalPokemon = totalPokemon;
    this.numberPokemonsAtPage = numberPokemonsAtPage;
    this.actionPrevious = actionPrevious;
    this.actionNext = actionNext;

    this.render();
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
        this.actionPrevious
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
        "navbar__button navbar__button--pagination"
      );
      buttonPrevius.element.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
    } catch (error) {
      throw new Error("Could not render AppComponent header Pokédex");
    }
  }
}

export default PaginationComponent;
