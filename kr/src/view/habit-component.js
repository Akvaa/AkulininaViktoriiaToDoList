import AbstractComponent from "../framework/view/apbstract-component.js";

function createHabitTemplate(habit) {
  return `
    <li class="habit -item">
        <div class="habit-details">
          <p>Название: ${habit.title}</p>
          <p>Автор: ${habit.author}</p>
          <p>Жанр: ${habit.genre}</p>
        </div>
        <div>
          <button class="delete-button">Удалить</button>
          <button class="edit-button">Редактировать</button>
        </div>
    </li>
    `;
}

export default class HabitComponent extends AbstractComponent {
  #habit = null;
  #handleDelteClick = null;
  #handleEditClick = null;

  constructor({ habit, deleteHandle, editHandle }) {
    super();

    this.#habit = habit;
    this.#handleDelteClick = deleteHandle;
    this.#handleEditClick = editHandle;

    this.element
      .querySelector(".delete-button")
      .addEventListener("click", this.#deleteHandler);
    this.element
      .querySelector(".edit-button")
      .addEventListener("click", this.#editHandler);
  }

  get template() {
    return createHabitTemplate(this.#habit);
  }

  #deleteHandler = (evt) => {
    evt.preventDefault();
    this.#handleDelteClick(this.#habit);
  };

  #editHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick(this.#habit);
  };
}
