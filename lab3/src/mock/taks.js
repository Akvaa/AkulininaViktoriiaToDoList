import { Status } from "../const.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: ["Выучить JS", "Выучить React", "Сделать домашку"]
    },
    {
        status: Status.PROCESSING,
        tasks: ["Выпить джус", "Попить воды"]
    },
    {
        status: Status.DONE,
        tasks: ["Позвонить маме", "Погладить кота!"]
    },
    {
        status: Status.BASKET,
        tasks: ["Сходить погулять", "Прочитать всего Достоевского"]
    }
]