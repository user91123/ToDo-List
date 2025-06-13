import { tasks, currentFilter } from './state.js';

const taskListEl = document.querySelector(".task-list");
const defoltNote = document.querySelector(".note-no-tasks");
const totalCountEl = document.querySelector(".total-count");
const completedCountEl = document.querySelector(".completed-count");
const filterBtns = document.querySelectorAll(".filter-btn");

export function renderAllTasks(renderTaskCallback) {
  taskListEl.innerHTML = "";

  const filtered = tasks.filter(t => {
    if (currentFilter === "active") return !t.completed;
    if (currentFilter === "completed") return t.completed;
    return true;
  });

  filtered.forEach(renderTaskCallback);
  updateCounters();
  updateEmptyNote();
  updateActiveFilter();
}

function updateCounters() {
  totalCountEl.textContent = `Всего: ${tasks.length}`;
  completedCountEl.textContent = `Завершено: ${tasks.filter(t => t.completed).length}`;
}

function updateEmptyNote() {
  defoltNote.classList.toggle("hidden", tasks.length > 0);
}

function updateActiveFilter() {
  filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });
}
