// import { CreateandGet, storeData } from "./index.js";
const CreateandGet = require("./index");
const removeTodo = require("./remove");

describe("Remove List Item", () => {
  beforeAll(() => {
    const todoTasks = [
      { description: "Todo 1", complete: false, index: 1 },
      { description: "Todo 2", complete: false, index: 2 },
      { description: "Todo 3", complete: false, index: 3 },
      { description: "Todo 4", complete: false, index: 4 },
      { description: "Todo 5", complete: false, index: 5 },
    ];
    CreateandGet.storeData(todoTasks);
  });

  test("Remove data from list", () => {
    removeTodo(4);
    const todoTasks = CreateandGet.CreateandGet();
    expect(todoTasks.length).toEqual(4);
    todoTasks.forEach((element, index) => {
      element.index = index + 1;
    });
  });
});
