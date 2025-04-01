import { getDb, saveDb } from "../utils/db";
import chalk from "chalk";

export async function deleteAllTasks() {
  const db = await getDb();

  if (db.tasks.length === 0) {
    console.log(chalk.yellow("No tasks to delete!"));
    return;
  }

  db.tasks = []; // Clear all tasks
  await saveDb(db);
  console.log(chalk.red("All tasks have been deleted."));
}
