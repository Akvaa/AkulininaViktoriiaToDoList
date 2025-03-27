import BaseComponent from '../framework/base-component.js';

function createHeaderComponentTemplate() {
    return (
        `<header class="header-section">
        <h1 class="main-title">Список задач</h1>
    </header>`
      );
}

export default class HeaderComponent extends BaseComponent {
    getTemplate() {
        return createHeaderComponentTemplate();
    }
}
