import { createElement } from "../render.js";

export default class AbstractComponent {
  #element = null;

  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error("You can't create a abstract component");
    }
  }

  get template() {
    throw new Error("Abstract not template");
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
