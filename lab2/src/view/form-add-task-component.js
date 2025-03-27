import BaseComponent from '../framework/base-component.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<section class="form-section">
        <form class="task-form">
            <h2 class="form-title">Новая задача</h2>
            <input class="task-input" placeholder="Название задачи..." type="text">
            <button class="add-task-btn" id="addTaskBtn">Добавить</button>
        </form></section>`
      );
}

export default class FormAddTaskComponentTemplate extends BaseComponent {
    getTemplate() {
        return createFormAddTaskComponentTemplate();
    }
}