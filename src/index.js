import './style.css';
import {
  addTodo,
  removeTodo,
  updateTodo,
  completed,
  clearCompletedTodos,
} from './input.js';

export let todoTasks = [];

export const CreateandGet = () => {
  if (localStorage.getItem('todos') == null) {
    localStorage.setItem('todos', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('todos'));
};

export const storeData = (todoTasks) => {
  localStorage.setItem('todos', JSON.stringify(todoTasks));
};

const todoListSection = document.getElementById('todo_section');

const form = document.createElement('div');
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
input.id = 'input';
input.addEventListener('change', (e) => {
  e.preventDefault();
  addTodo(e.target.value);
  e.target.value = '';
});

form.appendChild(header);
form.appendChild(input);
todoListSection.appendChild(form);
const unorderedList = document.createElement('ul');
unorderedList.classList.add('unorderedList');

const button = document.createElement('button');
button.classList.add('clear');
button.textContent = 'Clear all complete';
button.addEventListener('click', () => clearCompletedTodos());

export const displayTodoList = () => {
  todoTasks = CreateandGet();

  unorderedList.innerHTML = '';

  todoTasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');

    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('descriptionSection');

    const checkBox = document.createElement('input');
    checkBox.classList.add('material-symbols-outlined');
    checkBox.checked = task.complete ? true : false;
    checkBox.type = 'checkbox';
    checkBox.addEventListener('click', () => completed(index + 1));

    const description = document.createElement('p');
    description.textContent = task.description;
    description.contentEditable = true;
    description.addEventListener('keypress', (e) => updateTodo(e, index + 1));

    const btnDelete = document.createElement('span');
    btnDelete.classList.add('material-symbols-outlined');
    btnDelete.textContent = 'delete';
    btnDelete.addEventListener('click', () => removeTodo(index + 1));

    descriptionSection.appendChild(checkBox);
    descriptionSection.appendChild(description);
    listItem.appendChild(descriptionSection);
    listItem.appendChild(btnDelete);

    unorderedList.appendChild(listItem);
  });
  todoListSection.appendChild(unorderedList);

  todoListSection.appendChild(button);
};

displayTodoList();
