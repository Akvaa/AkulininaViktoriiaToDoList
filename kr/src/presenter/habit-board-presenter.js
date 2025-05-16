import { generateID } from "../../util.js";
import { Genre } from "../../const.js";
import { render } from "../framework/render.js";
import HabitComponent from "../view/habit-component.js";
import HabitEditComponent from "../view/habits-edit-component.js";

export default class HabitBoardPresenter {
  #container = null;
  #habitModel = null;
  #boardhabits = null;
  #openEditModalHandle = null;
  #habitDeleteHandler = null;
  #editModal = null;

  constructor({
    habitsContainer,
    habitModel,
    openEditModalHandle,
    handleEditHabit,
    habitDeleteHandle,
  }) {
    this.#container = habitsContainer;
    this.#habitModel = habitModel;
    this.#habitDeleteHandler = habitDeleteHandle;
    this.#openEditModalHandle = openEditModalHandle;
    this.#editModal = new HabitEditComponent({ editHandler: handleEditHabit });

    this.#habitModel.addObserver(this.#handleModelChange.bind(this));
  }

  init() {
    this.#habitModel.init();

    render(this.#editModal, this.#container.element);
    this.#renderListHabits();
  }

  #renderListHabits() {
    this.#boardhabits = [...this.#habitModel.habits];
    const habitsContainer = this.#container.element.querySelector("ul");

    this.#boardhabits.forEach((habit) => {
      render(
        new HabitComponent({
          habit: habit,
          deleteHandle: this.#habitDeleteHandler,
          editHandle: this.#openEditModalHandle,
        }),
        habitsContainer
      );
    });
  }

  filterHabit(genre) {
    this.#habitModel.filterHabitByGenre(genre);
  }

  addHabit() {
    const newHabit = {
      id: generateID(),
      title: document.querySelector("#habit-title").value.trim(),
      author: document.querySelector("#habit-author").value.trim(),
      genre: Genre[document.querySelector("#habit-genre").value.toUpperCase()],
    };

    this.#habitModel.addHabit(newHabit);

    document.querySelector("#habit-title").value = "";
    document.querySelector("#habit-author").value = "";
    document.querySelector("#habit-genre").value = "";
  }

  deleteHabit(habit) {
    this.#habitModel.deleteHabit(habit);
  }

  editHabit(habit) {
    this.#habitModel.editHabit(habit);
  }

  openEditModal(habit) {
    this.#editModal.open(habit);
  }

  #clearList() {
    this.#container.element.querySelector("ul").innerHTML = "";
  }

  #handleModelChange() {
    this.#clearList();
    this.#renderListHabits();
  }
}
