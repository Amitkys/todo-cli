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
exports.listTasks = listTasks;
const chalk_1 = __importDefault(require("chalk"));
const db_1 = require("../utils/db");
function listTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, db_1.getDb)();
        console.log(chalk_1.default.yellow("Your Todos:"));
        db.tasks.forEach((task) => {
            const status = task.completed ? chalk_1.default.green("✓") : chalk_1.default.red("✗");
            console.log(`${task.id}. ${task.completed ? chalk_1.default.strikethrough(task.task) : task.task} ${status}`);
        });
    });
}
