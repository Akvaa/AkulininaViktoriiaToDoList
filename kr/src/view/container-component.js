import AbstractComponent from "../framework/view/apbstract-component.js";

function createContainerComponentTemplate() {
  return `
        <div class="container">
          <h1>Ежедневный Трекер Привычек</h1>

        </div>
    `;
}

export default class ContainerComponent extends AbstractComponent {
  get template() {
    return createContainerComponentTemplate();
  }
}
