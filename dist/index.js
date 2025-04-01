#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const add_1 = require("./commands/add");
const list_1 = require("./commands/list");
const complete_1 = require("./commands/complete");
const delete_1 = require("./commands/delete");
const deleteAll_1 = require("./commands/deleteAll");
const program = new commander_1.Command();
// Show ASCII art only when no command is provided
if (process.argv.length < 3) {
    console.log(chalk_1.default.blue(figlet_1.default.textSync("Todo CLI")));
}
program
    .version("1.0.0")
    .description(chalk_1.default.green("Todo CLI created by: ~ AmitKYs"));
program
    .command("add <task>")
    .description("Add a task")
    .action((task) => (0, add_1.addTask)(task));
program
    .command("list")
    .description("List all tasks")
    .action(() => (0, list_1.listTasks)());
program
    .command("complete <id>")
    .description("Complete a task")
    .action((id) => (0, complete_1.completeTask)(parseInt(id)));
program
    .command("delete <id>")
    .description("Delete a task")
    .action((id) => (0, delete_1.deleteTask)(parseInt(id)));
program
    .command("deleteAll")
    .description("Delete all tasks")
    .action(() => (0, deleteAll_1.deleteAllTasks)());
program.parse(process.argv);
