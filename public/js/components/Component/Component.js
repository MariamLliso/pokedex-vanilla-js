class Component {
  element;

  constructor(parentElement, elementType, className) {
    this.element = document.createElement(elementType);
    this.element.className = className;

    parentElement.append(this.element);
  }
}

export default Component;
