import { tasks, currentFilter } from './state.js';
import { deleteTask, toggleTask } from './tasks.js';

const taskListEl = document.querySelector(".task-list");
const defoltNote = document.querySelector(".note-no-tasks");
const totalCountEl = document.querySelector(".total-count");
const completedCountEl = document.querySelector(".completed-count");
const filterBtns = document.querySelectorAll(".filter-btn");

export function renderAllTasks() {
  taskListEl.innerHTML = "";

  const filtered = tasks.filter(t => {
    if (currentFilter === "active") return !t.completed;
    if (currentFilter === "completed") return t.completed;
    return true;
  });

  filtered.forEach(renderTask);
  updateCounters();
  updateEmptyNote();
  updateActiveFilter();
}

function renderTask(task) {
  const taskEl = document.createElement("div");
  taskEl.className = "task";
  taskEl.innerHTML = `
    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}>
    <p class="task-text ${task.completed ? "done" : ""}">${task.text}</p>
    <button class="delete-btn"><i class="fa-solid fa-delete-left"></i></button>
  `;

  taskEl.querySelector(".checkbox").addEventListener("change", () => toggleTask(task.id));
  taskEl.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task.id));

  taskListEl.appendChild(taskEl);
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
