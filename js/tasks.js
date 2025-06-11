import { saveTasks, tasks } from './state.js';
import { renderAllTasks } from './render.js';

export function createTask(text) {
  return { id: Date.now(), text, completed: false };
}

export function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) tasks.splice(index, 1);
  saveTasks();
  renderAllTasks();
}

export function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  saveTasks();
  renderAllTasks();
}
