// import { storeData, displayTodoList } from "./index";
const storeData = require("./index");
const displayTodoList = require("./index");
const CreateandGet = require("./index");

export const removeTodo = (index) => {
  const updatedTodo = CreateandGet.CreateandGet().filter(
    (item) => item.index !== index
  );
  updatedTodo.forEach((element, index) => {
    element.index = index + 1;
  });
  storeData.storeData(updatedTodo);
  displayTodoList.displayTodoList();
};
