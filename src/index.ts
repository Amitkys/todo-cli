#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import { Command } from "commander";

import { addTask } from "./commands/add";
import { listTasks } from "./commands/list";
import { completeTask } from "./commands/complete";
import { deleteTask } from "./commands/delete";
import { deleteAllTasks } from "./commands/deleteAll";

const program = new Command();

// Show ASCII art only when no command is provided
if (process.argv.length < 3) {
  console.log(chalk.blue(figlet.textSync("Todo CLI")));
}

program
  .version("1.0.0")
  .description(chalk.green("Todo CLI created by: ~ AmitKYs"));

program
  .command("add <task>")
  .description("Add a task")
  .action((task) => addTask(task));

program
  .command("list")
  .description("List all tasks")
  .action(() => listTasks());

program
  .command("complete <id>")
  .description("Complete a task")
  .action((id) => completeTask(parseInt(id)));

program
  .command("delete <id>")
  .description("Delete a task")
  .action((id) => deleteTask(parseInt(id)));

program
  .command("deleteAll")
  .description("Delete all tasks")
  .action(() => deleteAllTasks());

program.parse(process.argv);
