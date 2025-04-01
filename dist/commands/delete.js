"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = deleteTask;
const db_1 = require("../utils/db");
const chalk_1 = __importDefault(require("chalk"));
function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, db_1.getDb)();
        const task = db.tasks.find((t) => t.id === id);
        if (task) {
            // Task found, remove it from the array
            const taskIndex = db.tasks.indexOf(task);
            db.tasks.splice(taskIndex, 1); // Remove task by index
            yield (0, db_1.saveDb)(db);
            console.log(chalk_1.default.red(`Task "${task.task}" has been deleted.`)); // Display task name
        }
        else {
            console.log(chalk_1.default.red("Task not found!"));
        }
    });
}
