import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskSectionComponent from './view/tasks-section-component.js'
import TaskCategoryListComponent from './view/task-category-list-component.js'
import TaskCategoryComponent from './view/task-category-item-component.js'
import {render, RenderPosition} from './framework/render.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
//
render(new TaskSectionComponent(), deskContainer);

//
const taskListContainer = document.querySelector('.tasks-section');

for (let i = 0; i < 4; i++) {
    const list = new TaskCategoryListComponent();

    render(list, taskListContainer);
    
    const taskContainer = list.getElement().querySelector(".task-category");

    for (let j = 0; j < 4; j++) {
        render(new TaskCategoryComponent(), taskContainer);
    }
}