import BaseComponent from '../framework/base-component.js';


function createTaskCategoryListComponentTemplate() {
    return (
        `<ul class="task-category pending">
            <h3 class="category-title">название категории задачек</h3>
        </ul>`
      );
}

export default class TaskCategoryListComponent extends BaseComponent {
    getTemplate() {
        return createTaskCategoryListComponentTemplate();
    }
}