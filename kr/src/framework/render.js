import AbstractComponent from "./view/apbstract-component.js";

const RenderPosition = {
  BEFOREBEGIN: `beforebegin`,
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};

function createElement(template) {
  const newElement = document.createElement("div");
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {
  if (!(component instanceof AbstractComponent)) {
    throw new Error("only component not Abstract");
  }

  if (component === null) {
    throw new Error("Component not can be null");
  }

  container.insertAdjacentElement(place, component.element);
}

export { RenderPosition, createElement, render };
