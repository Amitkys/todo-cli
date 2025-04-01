import { getDb, saveDb } from "../utils/db";
import chalk from "chalk";

export async function deleteTask(id: number) {
  const db = await getDb();
  const task = db.tasks.find((t) => t.id === id);

  if (task) {
    // Task found, remove it from the array
    const taskIndex = db.tasks.indexOf(task);
    db.tasks.splice(taskIndex, 1); // Remove task by index
    await saveDb(db);
    console.log(chalk.red(`Task "${task.task}" has been deleted.`)); // Display task name
  } else {
    console.log(chalk.red("Task not found!"));
  }
}
