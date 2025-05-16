import { Genre } from "../../const.js";
import { generateID } from "../../util.js";

export const habits = [
  { id: generateID(), title: "1984", author: "Оруэл", genre: Genre.FANTASY },
  { id: generateID(), title: "1983", author: "Оруэл", genre: Genre.FANTASY },
];
