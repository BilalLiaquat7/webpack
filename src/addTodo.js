const addTodo = (description) => {
  const id = 0;
  const todo = { description, index: id + 1, complete: false };
  return todo;
};

module.exports = addTodo;
