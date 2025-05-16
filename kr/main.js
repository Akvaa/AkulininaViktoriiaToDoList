import { render, RenderPosition } from "./src/framework/render.js";
import HabitFilterComponent from "./src/view/habits-filter-component.js";
import HabitFormComponent from "./src/view/habits-form-component.js";
import HabitListComponent from "./src/view/habits-list-component.js";
import ContainerComponent from "./src/view/container-component.js";
import HabitBoardPresenter from "./src/presenter/habit-board-presenter.js";
import HabitsModel from "./src/model/habit-model.js";
import HabitEditComponent from "./src/view/habits-edit-component.js";

const bodyContainer = document.querySelector("body");

const container = new ContainerComponent();

render(container, bodyContainer, RenderPosition.AFTERBEGIN);

const habitModel = new HabitsModel();

const habitFormComponent = new HabitFormComponent({
  onClick: HandleAddHabit,
});

const habitFilterComponent = new HabitFilterComponent({
  onChange: HandleGenreFilter,
});

const habitListComponent = new HabitListComponent();

const habitsBoardPresenter = new HabitBoardPresenter({
  habitsContainer: habitListComponent,
  habitModel: habitModel,
  openEditModalHandle: HandleOpenEditHabit,
  handleEditHabit: HandleEditHabit,
  habitDeleteHandle: HandleDeleteHabit,
});

render(habitFormComponent, container.element);
render(habitFilterComponent, container.element);
render(habitListComponent, container.element);

habitsBoardPresenter.init();

function HandleAddHabit() {
  habitsBoardPresenter.addHabit();
}

function HandleGenreFilter(genre) {
  habitsBoardPresenter.filterHabit(genre);
}

function HandleDeleteHabit(habit) {
  habitsBoardPresenter.deleteHabit(habit);
}

function HandleOpenEditHabit(habit) {
  habitsBoardPresenter.openEditModal(habit);
}

function HandleEditHabit(habit) {
  habitsBoardPresenter.editHabit(habit);
}
