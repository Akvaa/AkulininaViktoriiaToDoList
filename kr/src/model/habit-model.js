import { habits } from "../mock/habits.js";
import Observable from "../framework/observable.js";
import { generateID } from "../../util.js";

export default class HabitsModel extends Observable {
  #habitsSet = [];
  #habitsSecond = [];
  #currentFilter = null;

  init() {
    habits.forEach((habit) => {
      this.#habitsSet.push(habit);
    });

    this.#habitsSecond = this.#habitsSet;
  }

  get habits() {
    return this.#habitsSecond;
  }

  filterHabitByGenre(genre) {
    if (genre) {
      this.#habitsSecond = this.#habitsSet.filter((f) => f.genre === genre);
    } else {
      this.#habitsSecond = this.#habitsSet;
    }

    this.#currentFilter = genre;

    this.notifyObserver();
  }

  editHabit(editedHabit) {
    this.#habitsSet.forEach((habit) => {
      if (habit.id === editedHabit.id) {
        habit.title = editedHabit.title;
        habit.author = editedHabit.author;
        habit.genre = editedHabit.genre;
      }
    });

    this.notifyObserver();
  }

  addHabit(habit) {
    this.#habitsSet.push(habit);

    if (this.#currentFilter === habit.genre) {
      this.#habitsSecond.push(habit);
    }

    this.notifyObserver();
  }

  deleteHabit(habit) {
    this.#habitsSet = this.#habitsSet.filter((f) => f.id !== habit.id);
    this.#habitsSecond = this.#habitsSecond.filter((f) => f.id !== habit.id);

    this.notifyObserver();
  }
}
