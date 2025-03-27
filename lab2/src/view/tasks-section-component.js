import BaseComponent from '../framework/base-component.js';


function createTaskSectionComponentTemplate() {
    return (
        `<section class="tasks-section"></section>`
      );
}

export default class TaskSectionComponent extends BaseComponent {
    getTemplate() {
        return createTaskSectionComponentTemplate();
    }
}