import { addTask, tasks, currentFilter, setFilter } from './state.js';
import { renderAllTasks } from './render.js';

const inputEl = document.querySelector(".input-area");
const addBtnEl = document.querySelector(".add-btn");
const filterBtns = document.querySelectorAll(".filter-btn");

renderAllTasks();

addBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  const text = inputEl.value.trim();
  if (!text) return;

  addTask(text);
  inputEl.value = "";
  renderAllTasks();
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    setFilter(btn.dataset.filter);
    renderAllTasks();
  });
});
