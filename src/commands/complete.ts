import { getDb, saveDb } from "../utils/db";
import chalk from "chalk";

export async function completeTask(id: number) {
  const db = await getDb();
  const task = db.tasks.find((t) => t.id == id);

  if (task) {
    task.completed = true;
    await saveDb(db);
    console.log(chalk.green(`Task "${task.task}" marked as completed!`));
  } else {
    console.log(chalk.red("Task not found!"));
  }
}
