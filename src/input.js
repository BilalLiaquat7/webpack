import {
  todoTasks,
  displayTodoList,
  CreateandGet,
  storeData,
} from "./index.js";
import { addTodo } from "./addTodo.js";

export const Addtodo = (description) => {
  const todo = addTodo(description);
  todo.index = CreateandGet().length + 1;
  todoTasks.push(todo);
  storeData(todoTasks);
  displayTodoList();
};

export const updateTodo = (e, index) => {
  if (e.keyCode === 13) {
    const updatetodo = CreateandGet().map((item) => {
      if (item.index === index) {
        item.description = e.target.textContent;
      }
      return item;
    });
    storeData(updatetodo);
    displayTodoList();
  }
};

export const completed = (index) => {
  const updatetodo = CreateandGet().map((item) => {
    if (item.index === index && item.complete === true) {
      item.complete = false;
    } else if (item.index === index) {
      item.complete = true;
    }
    return item;
  });
  console.log(updatetodo);
  storeData(updatetodo);
  displayTodoList();
};

export const clearCompletedTodos = () => {
  const updatetodo = CreateandGet().filter((item) => item.complete === false);
  updatetodo.forEach((element, index) => {
    element.index = index + 1;
  });
  storeData(updatetodo);
  displayTodoList();
};
