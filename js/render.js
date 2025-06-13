import { deleteTask, toggleTask } from './tasks.js';

export function renderTask(task) {
  const taskEl = document.createElement("div");
  taskEl.className = "task";
  taskEl.innerHTML = `
    <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}>
    <p class="task-text ${task.completed ? "done" : ""}">${task.text}</p>
    <button class="delete-btn"><i class="fa-solid fa-delete-left"></i></button>
  `;

  taskEl.querySelector(".checkbox").addEventListener("change", () => {
    toggleTask(task.id);
    document.dispatchEvent(new Event("tasks-changed"));
  });

  taskEl.querySelector(".delete-btn").addEventListener("click", () => {
    deleteTask(task.id);
    document.dispatchEvent(new Event("tasks-changed"));
  });

  document.querySelector(".task-list").appendChild(taskEl);
}
