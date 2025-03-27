import BaseComponent from '../framework/base-component.js';


function createTaskCategoryItemComponentTemplate() {
    return (
        `<li class="task-category-item">название задачки</li>`
      );
}

export default class TaskCategoryComponent extends BaseComponent {
    getTemplate() {
        return createTaskCategoryItemComponentTemplate();
    }
}