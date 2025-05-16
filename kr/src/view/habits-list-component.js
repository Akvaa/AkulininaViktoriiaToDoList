import AbstractComponent from "../framework/view/apbstract-component.js";

function createHabitListTemplate() {
  return `<div class="habit-list">
            <h2>Список Привычек</h2>
            <div id="habit-list">
                <!-- Список привычек будет динамически отображаться здесь -->
            </div>
         </div>
        `;
}

export default class HabitListComponent extends AbstractComponent {
  get template() {
    return createHabitListTemplate();
  }
}
