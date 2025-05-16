import { GenreFromWord, Genre } from "../../const.js";
import AbstractComponent from "../framework/view/apbstract-component.js";

function createHabitEditTemplate() {
  return `
      <div class="modal-overlay" id="modalOverlay">
        <div class="modal">
            <div class="modal-header">
                <h3>Редактирование</h3>
                <button class="close-btn">&times;</button>
            </div>
            
            <div class="modal-content">
                <input id="habit-title-edit" type="text" placeholder="Название"></input>
                <input id="habit-author-edit" type="text" placeholder="Автор"></input>
                <p>Жанр</p>
                <select id="habit-genre-edit" required>
                    <option value="Fiction">Художественная</option>
                    <option value="Science">Научная</option>
                    <option value="Fantasy">Фантастика</option>
                    <option value="Biography">Биография</option>
                </select> 
            </div>

            <div class="modal-footer">
                <button class="edit-btn">Изменить</button>
            </div>
        </div>
    </div>
    `;
}

export default class HabitEditComponent extends AbstractComponent {
  #handleEditClick = null;
  #habit = null;

  constructor({ editHandler }) {
    super();

    this.#handleEditClick = editHandler;
    this.element
      .querySelector(".close-btn")
      .addEventListener("click", this.#closeHandle);
    this.element
      .querySelector(".edit-btn")
      .addEventListener("click", this.#editHandler);
  }

  open(habit) {
    this.#habit = habit;
    this.element.style.display = "block";
    this.element.querySelector("#habit-title-edit").value = habit.title;
    this.element.querySelector("#habit-author-edit").value = habit.author;
    this.element.querySelector("#habit-genre-edit").value =
      GenreFromWord[habit.genre];
  }

  #close() {
    this.#habit = null;
    this.element.style.display = "none";
  }

  get template() {
    return createHabitEditTemplate();
  }

  #editHandler = (evt) => {
    evt.preventDefault();
    const editedHabit = {
      id: this.#habit.id,
      title: document.querySelector("#habit-title-edit").value.trim(),
      author: document.querySelector("#habit-author-edit").value.trim(),
      genre:
        Genre[document.querySelector("#habit-genre-edit").value.toUpperCase()],
    };

    this.#handleEditClick(editedHabit);
    this.#close();
  };

  #closeHandle = (evt) => {
    evt.preventDefault();
    this.#close();
  };
}
