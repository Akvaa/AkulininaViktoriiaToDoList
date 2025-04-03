// BaseComponent - основа для создания компонентов, которые могут рендерить HTML-шаблоны и управлять своим состоянием
import { createElement } from "./render.js"

export default class BaseComponent {
    // метод для возвращения шаблона компонента
    getTemplate() {
    }

    // метод возвр. эл. компонента
    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }

        return this.element;
    }

    // метод очищает ссылку на эл.
    removeElement() {
        this.element = null;
    }
}