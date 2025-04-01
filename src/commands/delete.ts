import { getDb, saveDb } from "../utils/db";
import chalk from "chalk";

export async function deleteTask(id: number) {
  const db = await getDb();
  const taskIndex = db.tasks.findIndex((t) => t.id == id);

  if (taskIndex !== -1) {
    db.tasks.splice(taskIndex, 1); // Remove task by index
    await saveDb(db);
    console.log(chalk.red(`Task with ID ${id} has been deleted.`));
  } else {
    console.log(chalk.red("Task not found!"));
  }
}
