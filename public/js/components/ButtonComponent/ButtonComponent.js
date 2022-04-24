import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  text;
  action;

  constructor(parentElement, text, className, action) {
    super(parentElement, "button", className);
    this.text = text;
    this.action = action;

    this.render();
    this.addListeners();
  }

  render() {
    this.element.type = "button";
    this.element.textContent = this.text;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}

export default ButtonComponent;
