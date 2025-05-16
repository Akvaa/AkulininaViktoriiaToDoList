import { Genre } from "../../const.js";
import AbstractComponent from "../framework/view/apbstract-component.js";

function createHabitFilterTemplate() {
  return `
      <div class="habit-filter">
            <h2>Фильтры</h2>
            <label for="status-filter">Фильтр по статусу:</label>
            <select id="status-filter">
                <option value="all">Все</option>
                <option value="active">Активные</option>
                <option value="completed">Завершенные</option>
            </select>
        </div>
    `;
}

export default class HabitFilterComponent extends AbstractComponent {
  #handleChange = null;

  constructor({ onChange }) {
    super();

    this.#handleChange = onChange;
    this.element.addEventListener("change", this.#changeHandler);
  }

  get template() {
    return createHabitFilterTemplate();
  }

  #changeHandler = (evt) => {
    evt.preventDefault();
    const value = this.element.querySelector("#genre-filter").value;
    this.#handleChange(Genre[value.toUpperCase()]);
  };
}
