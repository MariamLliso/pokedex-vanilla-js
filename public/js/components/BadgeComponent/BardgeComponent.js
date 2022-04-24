import Component from "../Component/Component.js";

class BadgeComponent extends Component {
  constructor(parentElement, elementType, className, title) {
    super(parentElement, elementType, className);
    this.title = title;

    this.render();
  }

  render() {
    this.element.textContent = this.title;
  }
}

export default BadgeComponent;
