import chalk from "chalk";
import { getDb } from "../utils/db";

export async function listTasks() {
  const db = await getDb();
  console.log(chalk.yellow("Your Todos:"));

  db.tasks.forEach((task) => {
    const status = task.completed ? chalk.green("✓") : chalk.red("✗");
    console.log(
      `${task.id}. ${
        task.completed ? chalk.strikethrough(task.task) : task.task
      } ${status}`
    );
  });
}
