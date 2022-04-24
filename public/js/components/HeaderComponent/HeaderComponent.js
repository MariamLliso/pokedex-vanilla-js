import Component from "../Component/Component.js";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import NavbarComponent from "../NavbarComponent/NavbarComponent.js";

class HeaderComponent extends Component {
  title;
  page;

  constructor(parentElement, className, title, page) {
    super(parentElement, "header", className);
    this.title = title;
    this.page = page;

    this.render();
  }

  render() {
    try {
      new TitleComponent(this.element, "h1", "header__title", this.title);
    } catch (error) {
      throw new Error("Could not render HeaderComponent title");
    }

    try {
      new NavbarComponent(this.element, "navbar", this.page);
    } catch (error) {
      throw new Error("Could not render HeaderComponent title");
    }
  }
}

export default HeaderComponent;
