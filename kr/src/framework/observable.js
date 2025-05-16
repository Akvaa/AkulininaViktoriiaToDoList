export default class Observable {
  #observers = new Set();

  addObserver(observer) {
    this.#observers.add(observer);
  }

  removeObserver(observer) {
    this.#observers.delete(observer);
  }

  notifyObserver() {
    this.#observers.forEach((observer) => observer());
  }
}
