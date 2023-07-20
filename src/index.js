import './style.css';

const todoTasks = [
  {
    description: 'To do 1',
    completed: false,
    index: 0,
  },
  {
    description: 'to do 2',
    completed: true,
    index: 1,
  },
  {
    description: 'to do 3',
    completed: true,
    index: 2,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.getElementById('todo_section');

  const form = document.createElement('form');
  form.classList.add('form');

  const header = document.createElement('div');
  header.classList.add('header');
  const heading = document.createElement('span');
  heading.textContent = 'Today\'s To Do';
  header.appendChild(heading);
  const reloadIcon = document.createElement('span');
  reloadIcon.classList.add('material-symbols-outlined');
  reloadIcon.textContent = 'cached';
  header.appendChild(reloadIcon);
  const input = document.createElement('input');
  input.classList.add('input');
  input.placeholder = 'Add to your list...';
  form.appendChild(header);
  form.appendChild(input);
  todoList.appendChild(form);

  const displayTodoList = () => {
    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('unorderedList');

    todoTasks.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.classList.add('listItem');

      const descriptionSection = document.createElement('div');
      descriptionSection.classList.add('descriptionSection');

      const checkBox = document.createElement('span');
      checkBox.classList.add('material-symbols-outlined');
      checkBox.textContent = task.completed ? 'check_box': 'check_box_outline_blank';

      const description = document.createElement('p');
      description.textContent = task.description;

      const btnmore = document.createElement('span');
      btnmore.classList.add('material-symbols-outlined');
      btnmore.textContent = 'more_vert';

      descriptionSection.appendChild(checkBox);
      descriptionSection.appendChild(description);
      listItem.appendChild(descriptionSection);
      listItem.appendChild(btnmore);

      unorderedList.appendChild(listItem);
    });
    todoList.appendChild(unorderedList);

    const button = document.createElement('button');
    button.classList.add('clear');
    button.textContent = 'Clear all complete';
    todoList.appendChild(button);
  };

  displayTodoList();
});
