export let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
export let currentFilter = localStorage.getItem("currentFilter") || "all";

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function setFilter(filter) {
  currentFilter = filter;
  localStorage.setItem("currentFilter", currentFilter);
}

export function addTask(text) {
  tasks.push({ id: Date.now(), text, completed: false });
  saveTasks();
}
