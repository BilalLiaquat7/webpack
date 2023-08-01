const addTodo = require("./addTodo");

test("Insertig data", () => {
  expect(addTodo("Hello")).toStrictEqual({
    complete: false,
    description: "Hello",
    index: 1,
  });
});
