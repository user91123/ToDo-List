import { addTask, setFilter } from './state.js';
import { renderAllTasks } from './ui.js';
import { renderTask } from './render.js';

const inputEl = document.querySelector(".input-area");
const addBtnEl = document.querySelector(".add-btn");
const filterBtns = document.querySelectorAll(".filter-btn");

function updateUI() {
  renderAllTasks(renderTask);
}

updateUI();

addBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  const text = inputEl.value.trim();
  if (!text) return;

  addTask(text);
  inputEl.value = "";
  updateUI();
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    setFilter(btn.dataset.filter);
    updateUI();
  });
});
