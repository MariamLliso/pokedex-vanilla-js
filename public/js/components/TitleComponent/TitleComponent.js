import Component from "../Component/Component.js";

class TitleComponent extends Component {
  constructor(parentElement, elementType, className, title) {
    super(parentElement, elementType, className);
    this.title = title;

    this.render();
  }

  render() {
    this.element.textContent = this.title;
  }
}

export default TitleComponent;
